var http = require('http');
var fs = require('fs');

fs.readFile('debug.log',{encoding:'utf-8'}, function(err, data) {
    if(err) {
        if(err.code == 'ENOENT') {
            console.log(err.message());
        } else {
            console.log(err);
        }
    } else {
        console.log(data);
    }
});