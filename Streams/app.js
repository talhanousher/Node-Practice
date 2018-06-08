var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt');
var writeable = fs.createWriteStream(__dirname+'/greetcopy.txt');
// console.log(readable);

readable.on('data', function (chunks) {
    console.log(chunks.toString().length);
    // console.log(data);
    writeable.write(chunks);
})