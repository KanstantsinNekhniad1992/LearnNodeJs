var User = require('./user');
var db = require('db');
db.connect();
var log = require('./logger')(module);

function run() {
    var vasya = new User("Вася");
    var petia = new User("Петя");
    vasya.hello(petia);
    log(db.getPhrase('Run successful'));
}

if(module.parent) {
    exports.run = run;
} else{
    run();
}