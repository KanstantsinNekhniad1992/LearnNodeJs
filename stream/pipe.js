var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if(req.url == '/log.txt') {

        var file = fs.ReadStream(__dirname+'/log.txt', {encoding: 'utf-8'});
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function(err) {
        res.statusCode = 404;
        res.end('Error');
        console.log(err);
    });

    file.on('open', function() {
        console.log('open');
    });

    file.on('close', function() {
       console.log('close');
    });

    res.on('close', function() {
       file.destroy();
    });
}