var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('person');
});

app.post('/person', urlEncodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.send('Welcome : ' + req.body.firstname + ' ' + req.body.lastname);
})
app.post('/personJson', jsonParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    console.log(req.body)
})
app.listen(3000)