var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9000));

app.get('/ping/v1', (req, res) => {
  res.status(200).json({ ping: 'pong' })
});

app.all('*', (req, res) => {
  res.status(503).json({ error: 'Not implemented.'})
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
});
