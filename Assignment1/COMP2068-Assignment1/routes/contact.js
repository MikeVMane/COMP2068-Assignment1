'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});

module.exports = router;
