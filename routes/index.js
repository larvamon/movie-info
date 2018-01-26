var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Larva Movie'
  });
});

//get data action
router.get('/api/action', (req, res) => {
  res.render('action')
});

module.exports = router;
