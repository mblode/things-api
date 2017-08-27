var express = require('express');
var router = express.Router();

/* GET lists listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Verbb",
  }, {
    "id": 1,
    "name": "Jeremy Blode",
  }]);
});

module.exports = router;