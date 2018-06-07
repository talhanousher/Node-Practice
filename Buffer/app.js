var buff = new Buffer('Hello World');

console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());

buff.write('abc');
console.log(buff.toString())
