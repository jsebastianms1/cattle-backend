const express = require('express')
const { cpus } = require('os')
const cluster = require('cluster')
const http = require('http')
const config = require('./config')
const routes = require('./api')
const Knex = require('knex')
const { Model } = require('objection')
const { dev } = require('./db/knexfile')
const knex = Knex(dev)

Model.knex(knex)

const app = express()
const cpusLength = cpus().length
const server = http.createServer(app)
app.use(express.json())

app.use(routes)

app.use((err, req, res, next) => {
  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }
  res.status(500).send({ error: err.message })
})

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  for (let i = 0; i < cpusLength; i++) cluster.fork()

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died!`)
  })
} else {
  server.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`)
  })
  console.log(`Worker ${process.pid} started`)
}
