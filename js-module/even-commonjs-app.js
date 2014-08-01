// even-commonjs-app.js

define(function(require) {
	var isEven = require('./even-commonjs');

	console.log(1 , isEven(1));
	console.log(2 , isEven(2));
	console.log(3 , isEven(3));
	console.log(4 , isEven(4));
    console.log(1,  isEven(1));
    console.log(2,  isEven(2));
    console.log(3,  isEven(3));
    console.log(4,  isEven(4));
    console.log(5,  isEven(5));
    console.log(6,  isEven(6));
    console.log(7,  isEven(7));
    console.log(8,  isEven(8));
    console.log(9,  isEven(9));
    console.log(10, isEven(10));
    console.log(8675309, isEven(8675309));
    console.log(86753090, isEven(86753090));
});