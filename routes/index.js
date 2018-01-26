var express = require('express');
var router = express.Router();
var action = require('../api/action');
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Larva Movie'
  });
});

//get data action
router.get('/api/action', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`action`, {
        title: `Action Movies`,
        data: movies
      });
    });
});

module.exports = router;