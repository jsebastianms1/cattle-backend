const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env

module.exports = {
  port: PORT || 3000,
  db: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST
  }
}
