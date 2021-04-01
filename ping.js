'use strict'

const { Router } = require('express')
const router = Router()

router.get('/v1/ping', (req, res) => {
  res.status(200).json({ ping: 'pong' })
})

module.exports = router
