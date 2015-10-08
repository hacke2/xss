var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var query = req.query.q;
    res.render('index', {
        title: '搜索大全',
        query : query
    });
});

router.post('/q', function (req, res, next) {
    var query = req.body.q;
    res.send(query);
});


module.exports = router;
