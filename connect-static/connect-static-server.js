// connect-static-server.js

var finalhandler = require('finalhandler');
var http = require('http');
var serverStatic = require('serve-static');

// Serve up website directory
var serve = serverStatic('./http', {
    'index': ['defaul.html', 'default.htm', 'index.htm', 'index.html']
});

// create server
var app = http.createServer(function(request, response) {
    var done = finalhandler(request, response);
    serve(request, response, done);
});

// Listen
console.log('Connect is listening on port 8080');
app.listen(8080);
