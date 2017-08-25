var express = require('express');
var router = express.Router();

/* GET lists listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Inbox",
    "project": false
  }, {
    "id": 1,
    "name": "Today",
    "project": false
  }, {
    "id": 2,
    "name": "Next",
    "project": false
  }, {
    "id": 3,
    "name": "Later",
    "project": false
  }, {
    "id": 4,
    "name": "Someday",
    "project": false
  }, {
    "id": 5,
    "name": "Verbb",
    "project": true
  }, {
    "id": 6,
    "name": "Jeremy Blode",
    "project": true
  }]);
});

module.exports = router;