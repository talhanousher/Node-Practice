function Greet() {
    this.greetings = 'Hello Greet 3';
    this.greet = function () {
        console.log(this.greetings);
    }
}

module.exports = new Greet();