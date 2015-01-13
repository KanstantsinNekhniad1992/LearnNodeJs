var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;
    console.log(req.url);
    if(req.url == '/') {
        info = fs.readFileSync('index.html');
        res.end(info);
    }
}).listen(3000, '127.0.0.1');