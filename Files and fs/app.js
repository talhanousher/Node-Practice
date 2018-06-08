var fs = require('fs');
// console.log(fs);

// console.log(__dirname);
// console.log(__filename);

var greetFile = fs.readFileSync(__dirname + '/greet.txt');
console.log(greetFile.toString());

var greetFile = fs.readFileSync(__dirname + '/greet.txt' , 'utf8');
console.log(greetFile);


var greetFileAsync = fs.readFile(__dirname+'/greet.txt' , function(err,data){
    if(err !== null ){
        console.log(err);
    }

    console.log(data);
});