const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')

const app = express()

app.use(cors(), express.json(), express.static('assets'))

let database_

sqlite
    .open({driver: sqlite3.Database, filename: 'wishlist.sqlite'})
    .then(database => {
        database_ = database
    })

app.listen(3000)