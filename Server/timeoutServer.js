var http = require('http');

var server = new http.Server(function(req, res) {
   res.end('2');
}).listen(3000, '127.0.0.1');

setTimeout(function() {
   server.close();
},  2500);

var timer =  setInterval(function() {
   console.log(process.memoryUsage());
},1000);

timer.unref();
timer.ref();

