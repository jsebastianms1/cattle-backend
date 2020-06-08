const express = require('express')
const api = express.Router()

api.get('/', (req, res, next) => {
  return res.json({ message: 'Hello, this is the cattle app backend' })
})

module.exports = api
