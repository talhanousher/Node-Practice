var emitter = require('./emitter');
var emtr = new emitter();

emtr.on('greet',function(){
    console.log('Somone said Hello!');
})

emtr.on('greet',function(){
    console.log('A Greeting Occured');
})


console.log('Hello');
emtr.emit('greet');