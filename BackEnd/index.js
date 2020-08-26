const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

const app = express()


app.use(cors({ credentials: true, origin: 'http://localhost:8080' }), express.json(), express.static('assets'))

let database_

sqlite
    .open({ driver: sqlite3.Database, filename: 'wishlist.sqlite' })
    .then(database => {
        database_ = database
    })

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        database_.run('INSERT INTO users(username,firstname,lastname,phone,password) VALUES(?,?,?,?,?)', [req.body.username, req.body.firstname, req.body.lastname, req.body.phone, hash])
            .then(() => {
                console.log('User added')
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
            const rows = await database_.all('SELECT userid FROM sessionStorage WHERE token = ?', [token])
            req.userid = rows[0].userid
            if (rows.length === 1) {
                next()
            }
        } catch (e) {
            console.log('Something went wrong when retrieving the userid from sessionStorage, ', e)
            res.status(401).send()
        }
    } else {
        console.log('invalid user token')
        res.status(401).send()
    }
}

app.post('/logout', async (req, res) => {
    await database_.all('DELETE FROM sessionStorage WHERE userid = ?', [req.userid])
    res.set('Set-Cookie', 'token=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/')
    res.status(200).send('Logged out')
})

app.get('/user', authenticate, (req, res) => {
    //send the logged in users friendlist
    res.send(`hej ${req.userid}`)
})

app.listen(3000)