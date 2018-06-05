var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

var greet4 = require('./greet4');
var greetObj = new greet4();
greetObj.greet();


var greet5 = require('./greet5');
greet5.greet();