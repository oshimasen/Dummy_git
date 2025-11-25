const math = require('./mathUtils');
const str = require('./stringUtils');

console.log("=== Dummy JS Project ===");

console.log("Sum of 2 + 3:", math.add(2, 3));
console.log("Difference of 5 - 2:", math.subtract(5, 2));

console.log("Uppercase of 'hello world':", str.toUpper("hello world"));
