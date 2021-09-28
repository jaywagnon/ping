const config = require('config')
const chalk = require('chalk')
const log = require('loglevel')
const prefix = require('loglevel-plugin-prefix')

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.green,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

prefix.reg(log)
log.setLevel(config.log.level)

prefix.apply(log, {
  format(level, _name, _timestamp) {
    return colors[level.toUpperCase()](level)
  },
})

module.exports = log
