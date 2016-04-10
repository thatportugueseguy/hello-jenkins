var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkinsss!');
});

var port = process.env.PORT || 5000;

app.listen(port);
console.log('listening on port: ', port);
module.exports = app;
//asdf asdf asdf 
