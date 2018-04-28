'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: 'El nombre es requerido'
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: 'Ya se encuenta este email registrado',
    required: 'El email es requerido'
  },
  password: {
    type: String
  }
}, {timestamps: true})

module.exports = schema
