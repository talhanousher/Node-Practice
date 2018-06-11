var express = require('express');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 3000;
var app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    console.log(req.cookies);
})


app.listen(port)