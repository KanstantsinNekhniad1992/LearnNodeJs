var http = require('http');
var fs = require('fs');

function handler(req, res) {
    if(req.url = '/') {

        fs.readFile('qweqwe', function(err, content) {
            if(err) throw err;
            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}

var server = new http.createServer(handler);
module.exports = server;