var http = require('http');
var log = require('./log')(module);

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

console.log('server is running');