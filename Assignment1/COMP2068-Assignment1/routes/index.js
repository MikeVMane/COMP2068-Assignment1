/*
    File Name: index.js
    Author's Name: Michael Valadao-Martins
    WebSite Name: Michael Valadao-Martins Personal Portfolio
    File Description: This file is the js for getting the pug pages
 */
'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Michael Valadao-Martins Personal Portfolio' });
});

router.get('/about', function (req, res) {
    res.render('about', { about: 'About Me' });
});

router.get('/projects', function (req, res) {
    res.render('projects', { project: 'My Projects' });
});

router.get('/services', function (req, res) {
    res.render('services', { service: 'My Services' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { contact: 'Contact Me' });
});

module.exports = router;
