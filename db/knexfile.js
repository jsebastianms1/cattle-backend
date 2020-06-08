'use strict'

const { db: { host, database, username: user , password }} = require('../config')

module.exports = {
  dev: {
    client: 'pg',
    connection: {
      database,
      host,
      password,
      user
    },
    debug: true
  },
  migrations: {
    tableName: 'knex_migrations'
  },
}