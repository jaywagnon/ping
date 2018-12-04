var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function onRequest(request, response) {
  response.send({ ping: 'pong' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
