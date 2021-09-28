var express = require('express')
const config = require('config')

var app = express()
app.set('trust proxy', true)
app.use(express.json())

const cors = require('cors')
app.use(cors())

const { port } = config;
app.set('port', port)

// Swagger UI documentation
app.use(require('./docs'))

// Ping-Pong API
app.use(require('./ping'))

// Catch all other requests and return error
app.all('*', (req, res) => {
  res.status(503).json({ error: 'Not implemented.'})
})

app.listen(port, () => {
  console.log('Node app is running on port', port)
})
