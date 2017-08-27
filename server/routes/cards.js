var express = require('express');
var router = express.Router();

/* GET cards listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Grand Canyon National Park",
    "notes": "",
    "checked": false,
    "archived": false,
    "idList": 0,
    "idProject": 1,
    "idContext": 0,
  }, {
    "id": 1,
    "name": "Watch TV Show",
    "notes": "Hello there",
    "checked": false,
    "archived": false,
    "idList": 1,
    "idProject": 0,
    "idContext": 3,
  }, {
    "id": 2,
    "name": "Buy milk",
    "notes": "",
    "checked": false,
    "archived": false,
    "idList": 2,
    "idProject": null,
    "idContext": 4,
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