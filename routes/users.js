var express = require('express');
var router = express.Router();
var user = require('../helpers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/agile_board', user.comments);

module.exports = router;
