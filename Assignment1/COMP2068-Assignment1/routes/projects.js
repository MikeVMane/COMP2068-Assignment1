'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Express' });
});

module.exports = router;
