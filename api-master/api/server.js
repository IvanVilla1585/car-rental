'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const mongo = require('./db/mongo')
const AuthController = require('./auth')

mongo.setUpMongo()

const app = express()
const port = config.port || 8000

app.use(bodyParser.json())

const auth = new AuthController(app)
auth.setUpRoutes()

app.listen(port, () => {
  console.log(`Server running on the port ${port}`)
})
