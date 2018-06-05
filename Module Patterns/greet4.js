function Greet() {
    this.greetings = 'Hello Greet 4';
    this.greet = function () {
        console.log(this.greetings);
    }
}

module.exports = Greet;