var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var hour = new Date().getHours();
    res.locals = {
        hour: hour,
        isMorning: (hour < 12),
        isAfternoon: (hour >= 12 && hour < 18),
        isEvening: (hour >= 18 && hour < 22),
        isLate: (hour >= 22)
    };
    res.render('index', {
        title: 'Express',
        partials: { begin: 'htmlBegin'}
    });
});

module.exports = router;
