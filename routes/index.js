var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "agtamasmiftahul",
    password: "supermanvsthor",
    database: "moviesdb",
    charset: "utf8"
  }
})

var bookshelf = require(`bookshelf`)(knex);

const Movie = bookshelf.Model.extend({
  tableName: "movies"
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Larva Movie'
  });
});

//get data action
router.get('/action', (req, res) => {
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

//get data CRIME
router.get('/crime', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/80/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`crime`, {
        title: `Crime Movies`,
        data: movies
      })
    })
})

//get data drama
router.get('/drama', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/18/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`drama`, {
        title: `Drama Movies`,
        data: movies
      })
    })
})

//get data history
router.get('/history', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/36/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`history`, {
        title: `History Movies`,
        data: movies
      })
    })
})

//get data HORROR
router.get('/horor', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/27/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`horor`, {
        title: `Horror Movies`,
        data: movies
      })
    })
})

//get data SCI_FI
router.get('/science-fiction', (req, res) => {
  const url = 'https://api.themoviedb.org/3/genre/878/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let movies = data.results;
      res.render(`science-fiction`, {
        title: `Sci-Fi Movies`,
        data: movies
      })
    })
})

router.get('/api/movies', (req, res) => {
  Movie.collection()
    .fetch()
    .then(movie => {
      res.send({
        message: `Data was loaded`,
        data: movie.toJSON()
      })
    })
    .catch(err => {
      console.error(err)
    })
});

router.post('/api/movies', (req, res) => {
  Movie.forge({
      id: req.body.id,
      title: req.body.title,
      poster_path: req.body.poster_path,
      vote_average: req.body.vote_average,
      release_date: req.body.release_date,
      overview: req.body.overview
    })
    .save()
    .then(function(movie) {
      res.json({
        error: false,
        data: movie
      });
    })
    .otherwise(function(err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message
        }
      });
    });
});


module.exports = router;