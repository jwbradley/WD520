// testHogan.js
var hogan = require('hjs');
var template = 'I\'ve got a {{message}} for {{name}}.';
var withModel = {
		message: 'a message dated ' + new Date().toDateString(),
		name: 'you'
};

var compiledTemplate = hogan.compile(template);
console.log(compiledTemplate.render(withModel));