var express = require('express');
var router = express.Router();


router.get('/api/data', function(req, res) {
  res.json(req.query);
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
