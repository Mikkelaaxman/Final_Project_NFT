var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.use('/', express.static(path.join(__dirname, 'static/public')));

module.exports = router;
