var express = require('express');
var router = express.Router();

/* GET cards listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "checked": false,
    "notes": "",
    "idList": 0,
    "name": "Grand Canyon National Park"
  }, {
    "id": 1,
    "checked": false,
    "notes": "Hello there",
    "idList": 1,
    "name": "Watch TV Show"
  }, {
    "id": 2,
    "checked": false,
    "notes": "",
    "idList": 2,
    "name": "Buy milk"
  }]);
});

router.post('/', function(req, res, next) {
  var card = new Card();
  card.name = req.body.name;

  card.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Bear created!' });
  });
});


router.get('/:card_id/', function(req, res, next) {
  Card.findById(req.params.card_id, function(err, card) {
    if (err)
      res.send(err);
    
    res.json(card);
  });
});

module.exports = router;