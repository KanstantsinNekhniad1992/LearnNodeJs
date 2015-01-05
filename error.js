var util = require('util');

var phrases = {
    "Hello": "Привет",
    "World": "мир"
};

var HttpError = function(message, status) {
    this.message = message;
    this.status = status;
    this.stack = (new Error).stack;
};

HttpError.prototype.name = "HttpError";
util.inherits(HttpError, Error);

var PhraseError = function(message, status) {
    this.message = message;
    this.status = status;
    this.stack = (new Error).stack;
};

PhraseError.prototype.name = "PhraseError";
util.inherits(PhraseError, Error);

var getPhrase = function(phrase) {
    if(!phrases[phrase]) {
        throw new PhraseError('Phrase not found', 500);
    }
    return phrases[phrase];
};

var showMessage = function(page) {
    if(page !='index.html') {
        throw new HttpError("Page not found", 404);
    }
    return util.format("%s, %s!",getPhrase("Hello"), getPhrase('World'));
};

try {
    var page = showMessage('index');
    console.log(page);
}
catch (e) {
    if(e instanceof HttpError) {
        console.log(util.format("status: %d, \nmessage: %s,\nstack: %s", e.status, e.message, e.stack));
    } else {
        console.log(util.format("status: %d, \nmessage: %s,\nstack: %s", e.status, e.message, e.stack));
    }
}