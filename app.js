var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(73, function () {
  console.log('Ayo buka di port 73');
});