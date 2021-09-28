'use strict'

const { Router } = require('express')
const router = Router()

const log = require('./utils/log')

router.get('/v1/ping', (req, res) => {
  res.status(200).json({ ping: 'pong' })
})

router.post('/v1/ping', (req, res) => {
  log.debug(`Body:\n${JSON.stringify(req.body, null, 2)}`)
  res.status(200).json(req.body)
})

module.exports = router
