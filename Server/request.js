var url = require('url');
var log = require('./log')(module);

module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);
    if( urlParsed.pathname == '/echo' && urlParsed.query.message) {
        log.info(urlParsed.query.message);
        res.setHeader('Cache-control','no-cache');
        res.end(urlParsed.query.message);
        log.debug(res);
    } else {
        log.error('Unknown url');
        res.statusCode = 404;
        res.end('page not found');
    }
};