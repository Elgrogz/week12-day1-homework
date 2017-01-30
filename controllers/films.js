//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var filmRouter = express.Router();


//index
filmRouter.get('/films', function(req, res) {
  res.json(films);
});

//show
filmRouter.get('/films/:id', function(req, res) {
  res.json({ data: films[req.params.id]});
  console.log(req.params);
});

//create
filmRouter.post('/films', function(req, res) {

//the object getting added needs a tag matching the parameter passed in push(eg reg.body.FILM)
  films.push(req.body.film);
  res.json({data: films});
});


//update
filmRouter.put('/films/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

//delete
filmRouter.delete('/films/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;