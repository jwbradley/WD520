var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  res.render('index', { title: 'Hello, ' + req.params.name + '!' });
});

var studentDir = './student/';
router.get('/1', function(req, res) {
	res.sendfile(studentDir + 'page1.html');
});

var studentDir = './student/';
router.get('/2', function(req, res) {
	res.sendfile(studentDir + 'page2.html');
});

var studentDir = './student/';
router.get('/ABC', function(req, res) {
	res.sendfile(studentDir + 'pageABC.html');
});

var studentDir = './student/';
router.get('/!', function(req, res) {
	res.sendfile(studentDir + 'page!.html');
});

module.exports = router;
