var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var query = req.query.q;
    res.render('index', {
        query : query
    });
});

router.post('/q', function (req, res, next) {
    var query = req.body.q;
    res.send(query);
});

router.post('/comment', function (req, res, next) {
    var comment = req.body.comment;
    res.send(comment);
});

router.get('/cookie/:cookie', function (req, res, next) {
    var cookie = req.params.cookie;
    console.log(cookie);
    res.redirect(req.url);
});


module.exports = router;
