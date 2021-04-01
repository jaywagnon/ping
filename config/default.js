'use strict'

const defer = require('config/defer').deferConfig

module.exports = {
  environment: 'development',
  hostname: 'localhost',
  baseUrl: 'http://localhost:9000',
  log: {
    level: 'debug',
    prettyPrint: true
  },
  port: 9000
}
