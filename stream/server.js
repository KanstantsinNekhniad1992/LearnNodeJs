var fs = require('fs');

var stream = new fs.ReadStream(__dirname+'/log.txt', {encoding: 'utf-8'});

stream.on('readable', function() {
    var data = stream.read();
    console.log(data);
});

stream.on('end', function() {
    console.log('END');
});