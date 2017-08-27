var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Errand",
  }, {
    "id": 1,
    "name": "Home",
  }, {
    "id": 2,
    "name": "Office",
  }, {
    "id": 3,
    "name": "Important",
  }, {
    "id": 4,
    "name": "Pending",
  }]);
});

module.exports = router;