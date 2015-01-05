var http = require('http');

var server = new http.Server();
server.listen(1337, '127.0.0.1');

var counter=0;
server.on('request', function(request, response) {
    response.end('Hello, world!'+ ++counter);
});