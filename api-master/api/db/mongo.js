'use strict'

const mongoose = require('mongoose')

const config = require('../config')
const userSchema = require('../auth/user-model')

module.exports = {
  models: {},
  pool: {},
  async setUpMongo () {
    const connection = await mongoose.createConnection(config.db)

    this.pool = connection
    this.models['user'] = this.pool.model('User', userSchema)
  },
  getModel (model) {
    return this.models[model]
  }
}
