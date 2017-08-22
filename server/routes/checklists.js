var express = require('express');
var router = express.Router();

/* GET checklists listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 0,
    "name": "Awesomeness to come",
    "idCard": 0,
    "checkItems": [
      {
        "state": "complete",
        "idChecklist": 0,
        "id": 0,
        "name": "Custom Fields in CSV exports"
      },
      {
        "state": "incomplete",
        "idChecklist": 0,
        "id": 1,
        "name": "Custom Fields on mobile"
      },
      {
        "state": "incomplete",
        "idChecklist": 0,
        "id": 2,
        "name": "Working well across multiple boards"
      }
    ]
  }]);
});

module.exports = router;