const express = require('express')
const test = require('./basic')
const userRoutes = require('./user')
const cattleRoutes = require('./cattle')

const api = express.Router()

api.use('/', test)
api.use('/users', userRoutes)

module.exports = api
