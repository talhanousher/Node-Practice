var http = require('http');


http.createServer(function (req, res) {
    if (req.url === '/') {
        var obj = {
            firstName: 'Talha',
            lastName: 'Nousher',
        }
        res.end(JSON.stringify(obj));
    }
    if (req.url === '/api') {
        var user = {
            username: 'talhanousherali',
            email: 'talhanousher@gmail.com',
        }
        res.end(JSON.stringify(user));
    }
}).listen(1300,'127.0.0.1');