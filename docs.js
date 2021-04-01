'use strict'

const { Router } = require('express')
const router = Router()
const config = require('config')

const swaggerUi = require('swagger-ui-express')

const { baseUrl } = config;
console.log(baseUrl)

const API_DOCUMENTATION = [
  {
    name: 'Version 1', url: `${baseUrl}/v1/openapi.yml`
  }
]

const options = {
  explorer: true,
  swaggerOptions: {
    urls: API_DOCUMENTATION
  }
}

router.get('/v1/openapi.yml', (req, res) => {
  res.sendFile(__dirname + '/openapi.yml')
})

router.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(null, options))

module.exports = router
