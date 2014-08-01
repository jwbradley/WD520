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
router.get('/:digits', function(req, res) {
	res.sendfile(studentDir + 'page' + req.params.digits + '.html');
});


module.exports = router;
