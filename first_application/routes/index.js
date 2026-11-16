var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    {name: 'Tech Exchange', rating: 9},
    {name: 'A Link to the Past', rating: 10},
    {name: 'Dawnstar Games', rating: 9},
    {name: 'Sage Mantis', rating: 8},
    {name: 'Video Game Heaven (VB)', rating: 8}
  ];
  var myname = 'Cameron Dean';

  res.render('index', { 
    title: 'Favorite Retro Game Stores',
    places: places,
    myname: myname
   });
});

module.exports = router;
