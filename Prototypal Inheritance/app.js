function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// All Objects Constructed from above Constructor has this greet function in thier prototype
Person.prototype.greet = function () {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
var personObj = new Person('Talha', 'Nousher Ali');

personObj.greet();