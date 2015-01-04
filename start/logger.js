module.exports = function(module) {

    return function(/* ... */) {
        var args = [module.filename].concat(arguments[0]);
        console.log.apply(console, args);
    };
};