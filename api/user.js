const express = require('express')
const api = express.Router()
const { Userservice: service } = require('../lib')

api.get('/', service.list)
api.get('/:id', service.find)

module.exports = api
