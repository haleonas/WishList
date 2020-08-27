const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const {v4: uuidv4} = require('uuid')
//const {PRIVATE_VAPID_KEY, PUBLIC_VAPID_KEY} = require('./extra/keys')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server, { origins: '*:*'});

const connectedSockets = []

io.on('connection', client => {
    connectedSockets.push(client)

    io.emit('message')

    client.on('disconnect', client => {
        const index = connectedSockets.findIndex(socket => socket === client)
        connectedSockets.splice(index, 1)
    })
})

//http://localhost:8080
//http://10.0.2.2:5500
//http://localhost:5500
//http://192.168.10.125:5500

app.use(
    cors({credentials: true, origin: 'http://localhost:5500'}),
    express.json(),
    express.static('assets'),
    cookieParser())

let database_

sqlite
    .open({driver: sqlite3.Database, filename: 'wishlist.sqlite'})
    .then(database => {
        database_ = database
    })

app.post('/register', (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        database_.run('INSERT INTO users(username,firstname,lastname,phone,password) VALUES(?,?,?,?,?)', [req.body.username, req.body.firstname, req.body.lastname, req.body.phone, hash])
            .then(() => {
                console.log('User added')
                connectedSockets.forEach(client => {
                    client.emit('update')
                })
                res.status(200).send('User added')
            })
            .catch((e) => {
                console.log('something went wrong ', e)
                res.status(401).send('Failed to reguster ' + e)
            })
    })
})

app.post('/login', async (req, res) => {
    const rows = await database_.all('SELECT * FROM users WHERE username = ?', [req.body.username])
    if (rows.length === 1) {
        bcrypt.compare(req.body.password, rows[0].password, async (err, result) => {
            if (!result) {
                console.log('wrong password')
                return res.status(401).send({
                    msg: "Wrong username or password"
                })
            }
            if (result) {
                console.log('logged in')
                const userid = rows[0].userid
                const token = uuidv4()
                await database_.all('INSERT INTO sessionStorage(token,userid) VALUES(?,?)', [token, userid])
                res.set('Set-Cookie', `token=${token}; path=/; SameSite = LAX`)
                res.status(200).send({ token, user: rows[0] })
            }
        })
    } else {
        console.log('wrong username')
        res.status(401).send({
            msg: "Username does not exist"
        })
    }
})

async function authenticate(req, res, next) {
    const token = req.cookies['token']

    if (token) {
        try {
            console.log('checking if current user is logged in')
            const rows = await database_.all('SELECT userid FROM sessionStorage WHERE token = ?', [token])
            req.userid = rows[0].userid
            if (rows.length === 1) {
                console.log('logged in')
                next()
            }
        } catch (e) {
            console.log('Something went wrong when retrieving the userid from sessionStorage, ', e)
            res.status(500).send()
        }
    } else {
        console.log('invalid user token')
        res.status(401).send()
    }
}

app.post('/logout', authenticate, async (req, res) => {
    await database_.all('DELETE FROM sessionStorage WHERE userid = ?', [req.userid])
    res.set('Set-Cookie', 'token=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/')
    res.status(200).send('Logged out')
})

app.get('/user', authenticate, async (req, res) => {
    //send the logged in users friendlist
    //select *from user_view except select *from user_view where userid = 2
    try {
        const rows = await database_.all('select *from user_view except select *from user_view where userid = ?', [req.userid])
        console.log(rows)
        res.send(rows)
    } catch (e) {
        res.status(500).send({message: 'Something went wrong when retrieving users', e})
        console.log('Something went wrong when retrieving users', e)
    }
})

//add a list
app.post('/createlist', authenticate, async (req, res) => {
    try {
        //lägg till databasen listname, listurl
        //row = ex { stmt: Statement { stmt: undefined }, lastID: 1, changes: 1 }
        const row = await database_.run(
            'INSERT INTO lists(list_name,list_creator_id,list_url) VALUES(?,?,?)',
            [req.body.listName, req.userid, req.body.listUrl])

        for (let i = 0; i < req.body.items.length; i++) {
            await database_.run(
                'INSERT INTO list_items(list_id,item_name,item_description,item_url,completed) VAlUES(?,?,?,?,?)',
                [row.lastID, req.body.items[i].item_name, req.body.items[i].item_description, req.body.items[i].item_url, false])
        }
        for (let i = 0; i < req.body.friends.length; i++) {
            await database_.run(
                'INSERT INTO list_users(userid,list_id) VALUES(?,?)',
                [req.body.friends[i].userid, row.lastID]
            )
        }
    } catch (e) {
        console.log('Something went wrong when inserting the data to the database', e)
        res.status(500).send()
    }
    console.log('create list: Post')
    res.status(200).send()
})

//update a list in the name of the user
app.patch('/createlist', authenticate, async (req, res) => {
    console.log('[CreateList.patch]: updating data for list')
    try {
        //retrieving list_id
        console.log('[CreateList.patch]: Retrieving list_id')
        const row = await database_.all('SELECT list_id FROM lists WHERE list_url = ?', [req.body.listUrl])

        //update list name
        console.log('[CreateList.patch]: Updating listname')
        await database_.run('UPDATE lists SET list_name = ? WHERE list_id = ?', [req.body.listName, row[0].list_id])

        //removing old items in case they were removed in frontend
        console.log('[CreateList.patch]: Deleting old items from list')
        await database_.run('DELETE FROM list_items WHERE list_id = ?', [row[0].list_id])

        //removing old friends in case they removed in front end
        console.log('[CreateList.patch]: Deleting old friends from list')
        await database_.run('DELETE FROM list_users WHERE list_id = ?', [row[0].list_id])

        //reinserting items
        console.log('[CreateList.patch]: reinserting all friends to the list')
        for (let i = 0; i < req.body.items.length; i++) {
            await database_.run(
                'INSERT INTO list_items(list_id,item_name,item_description,item_url,completed) VAlUES(?,?,?,?,?)',
                [row[0].list_id, req.body.items[i].item_name, req.body.items[i].item_description, req.body.items[i].item_url, req.body.items[i].completed ? req.body.items[i].completed : false])
        }

        //reinserting friends
        for (let i = 0; i < req.body.friends.length; i++) {
            await database_.run(
                'INSERT INTO list_users(userid,list_id) VALUES(?,?)',
                [req.body.friends[i].userid, row[0].list_id]
            )
        }

        res.status(200).send()
    } catch (e) {
        console.log('[CreateList.patch]: Something went wrong when updating list')
        res.status(500).send()
    }
})

app.get('/editlist', authenticate, async (req, res) => {
    try {
        const lists = await database_.all('SELECT *FROM lists WHERE list_url = ?', [req.query.listUrl])
        //check if there is a list with that url
        if (lists.length === 0 || lists.length > 1) {
            res.status(404).send({message: 'Could not find any lists with that url'})
            //check if owner of the list
        } else if (lists[0].list_creator_id !== req.userid) {
            res.status(401).send({message: 'Unauthorized access to list'})
        } else if (lists.length === 1) {
            try {
                console.log('[Editlist]:Retrieving list information')
                const listItems = await database_.all('SELECT item_name, item_description, item_url, completed FROM list_items where list_id = ? ', [lists[0].list_id])
                const listUsers = await database_.all('select *from list_users_view where list_id = ?', [lists[0].list_id])
                let obj = {
                    listName: lists[0].list_name,
                    items: listItems,
                    users: listUsers
                }
                console.log('[Editlist]: Sending list information')
                res.status(200).send(obj)
            } catch (e) {
                console.log('[Editlist]: Something went wrong while retrieving listItems or listUsers ', e)
                res.status(500).send({message: 'Something went wrong while retrieving listItems or listUsers ', e})
            }
        }
    } catch (e) {
        console.log('[Editlist]: Something went wrong while retrieving list data ', e)
        res.status(500).send({message: 'Something went wrong while retrieving list data ', e})
    }
})

app.get('/lists', authenticate ,async (req, res) => {
    try {
        const rows = await database_.all('SELECT * FROM lists WHERE list_creator_id = ?', [req.userid])
        res.status(200).send(rows)
    } catch (e) {
        console.log('could not retrieve list')
        res.status(500).send({ message: 'Something went wrong while retrieving list data ', e })
    }
})

app.get('/assignedlists', authenticate, async (req, res) => {
    try {
        console.log('Getting friend lists')
        const rows = await database_.all('select list_url,list_name, users.firstname ||\' \'|| users.lastname as name from lists inner join list_users on lists.list_id = list_users.list_id inner join users on users.userid = lists.list_creator_id where list_users.userid = ?', [req.userid])
        res.status(200).send(rows)
    } catch (e) {
        console.log('Something went wrong while retrieving list data ')
        res.status(500).send({ message: 'Something went wrong while retrieving list data ', e })
    }
})

server.listen(3000)


//-------------------MY CODE ---------------------------------

app.get('/list', authenticate, async (req, res) => {
    console.log(req.query.listUrl)
    try {
        const lists = await database_.all('SELECT * FROM lists WHERE list_url = ?', [req.query.listUrl])
        const listId = lists[0].list_id

        const users = await database_.all('SELECT * FROM list_users WHERE list_id= ?', [listId])

        if(users.find(user => user.userid === req.userid)){
            console.log('part of the list')
            const listItems = await database_.all('SELECT * FROM list_items where list_id = ? ', [listId])
            const listUsers = await database_.all('select * from list_users_view where list_id = ?', [listId])

            let obj = {
                listName: lists[0].list_name,
                items: listItems,
                users: listUsers
            }

            res.status(200).send(obj)
        } else {
            console.log('not part of the list')
            res.status(401).send({message:'Your are not a part of this list'})
        }


    } catch (e) {
        console.log('[List]: Something went wrong while retrieving list data, ', e)
        res.status(500).send({message: 'Something went wrong while retrieving list data ', e})
    }
})

app.patch('/list', async (req, res) => {
    //console.log(req.body.itemList)

    try {
        for (const item of req.body.itemList) {
            await database_.run('UPDATE list_items SET completed = ? WHERE list_item_id = ?', [item.completed, item.list_item_id])
            console.log('YAY!!!')
        }
        res.status(200).send({message: 'yay'})
    } catch (e) {
        res.status(500).send({message: `${e}`})
    }
})





