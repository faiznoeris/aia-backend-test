const express = require('express')
const routes = require('./routes')

const app = express()
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')

    next()
}

app.use(express.json())
app.use(allowCrossDomain)
app.use('/', routes)

module.exports = app
