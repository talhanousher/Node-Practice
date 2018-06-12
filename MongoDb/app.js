var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin12345@ds255930.mlab.com:55930/addressbook');
var Schema = mongoose.Schema;

var personShema = new Schema({
    firstname: String,
    lastname: String,
    gender: String,
    address: String,
})

var Person = mongoose.model('Person', personShema);

var person1 = Person({
    firstname: 'Talha',
    lastname: 'Nousher Ali',
    gender: 'male',
    address: 'Karachi, Pakistan',
});


var person2 = Person({
    firstname: 'Osama',
    lastname: 'Nousher Ali',
    gender: 'male',
    address: 'Karachi, Pakistan',
});


person1.save(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Person1 Saved')
    }
})
person2.save(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Person2 Saved')
    }
});


Person.find({}, function (err, users) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(users);
    }

});
// app.listen(3000);