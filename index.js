var express = require('express');
var app = express();
app.set('trust proxy', true)

const cors = require('cors')
app.use(cors())

app.set('port', (process.env.PORT || 9000));

app.get('/ping/v1', (req, res) => {
  console.log(req)
  res.status(200).json({ ping: 'pong' })
})

app.all('*', (req, res) => {
  res.status(503).json({ error: 'Not implemented.'})
})

const PORT = app.get('port')
app.listen(PORT, () => {
  console.log('Node app is running on port', PORT)
})
