var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // var html = fs.readFileSync(__dirname + '/index.html').toString();
    // var message = 'Hello Talha !!!';
    // html = html.replace('{message}', message);
    fs.createReadStream(__dirname+'/index.html').pipe(res);

    // res.end(html);
});

server.listen(1300, '127.0.0.1');