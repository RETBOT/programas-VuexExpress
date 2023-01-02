var express = require('express');
var router = express.Router();
// <!-- by: RET BOT  -->
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// <!-- by: RET BOT  -->
