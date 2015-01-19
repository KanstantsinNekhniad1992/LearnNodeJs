var domain = require('domain');
var serverDomain = domain.create();

var server = require('./server');

serverDomain.on('error', function() {
   console.log("Домен перехватил %S", err);
});

serverDomain.run(function() {
    server.listen(3000);
})