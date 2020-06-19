'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Express' });
});

module.exports = router;
