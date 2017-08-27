var express = require('express');
var router = express.Router();

/* GET lists listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Inbox",
  }, {
    "id": 1,
    "name": "Today",
  }, {
    "id": 2,
    "name": "Next",
  }, {
    "id": 3,
    "name": "Later",
  }, {
    "id": 4,
    "name": "Someday",
  }]);
});

module.exports = router;