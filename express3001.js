
var fs = require('fs');
var express = require('express');
var app = express();

//  http://localhost:3001/open/road17

app.get('/:users', function (req, res) {
    res.jsonp({a:1});
//
});


//启动
var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
