'use strict'

module.exports = {
  port: process.env.PORT,
  db: process.env.MONGO_URL || 'mongodb://localhost:27017/cars'
}
