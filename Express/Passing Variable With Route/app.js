var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.json({ firstname: 'Talha ', lastname: 'nousher' });
});
app.get('/api', function (req, res) {
    res.json({ username: 'talhanousher', email: 'talhanousherali@gmail.com' })
});
app.get('/person/:id/:name', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World</h1><h2>' + req.params.id + ' and ' + req.params.name + '</h2></body></html>');
});



app.listen(port);
