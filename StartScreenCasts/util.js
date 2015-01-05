var util = require('util');

var obj = {
  a: 5,
  b: 4
};

obj.self = obj;

var str = util.format('My %s %d %j', "string", 123, {'name': "Kostya"});


var Animal = function(name) {
    this.name = name;
};

Animal.prototype.walk = function() {
    console.log(this.name + " is walking!");
};

var Rabbit = function (name) {
    this.name = name;
};

Rabbit.prototype.jump = function() {
    console.log(this.name + " is jumping!");
};

util.inherits(Rabbit, Animal);

var rab = new Rabbit('Rabbit');

console.log(rab.walk());