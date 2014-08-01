// render-centriq.js
var page = require('webpage').create();
page.open('http://dstsystems.com/', function() {
// page.open('http://centriq.com/', function() {
page.render('./DST.png');
// page.render('./centriq.png');
phantom.exit();
});