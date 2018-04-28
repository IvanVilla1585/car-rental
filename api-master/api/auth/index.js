'use strict'

const mongo = require('../db/mongo')

class AuthController {
  constructor (app) {
    this.app = app
  }

  setUpRoutes () {
    this.app.post('/login', async (req, res) => {
      const Model = mongo.getModel('user')
      const data = req.body

      const user = await Model.find(data)
      res.send({message: 'ok', user})
    })
  }
}

module.exports = AuthController
