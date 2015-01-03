var user = require('./user');

function run() {
    var vasya = new user.User("Вася");
    var petia = new user.User("Петя");
    vasya.hello(petia);
}

if(module.parent) {
    exports.run = run;
} else{
    run();
}