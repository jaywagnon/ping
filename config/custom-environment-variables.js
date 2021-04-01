'use strict'

require('dotenv').config()

module.exports = {
  environment: 'NODE_ENV',
  hostname: 'HOSTNAME',
  baseUrl: 'BASE_URL',
  log: {
    level: 'LOG_LEVEL', // ['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']
    format: 'LOG_FORMAT'
  },
  port: 'PORT'
}
