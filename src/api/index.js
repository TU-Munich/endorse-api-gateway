"use strict";

const express  = require('express');
const router   = express.Router();
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const routes     = require('./routes');

router.use(helmet());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use('/api', routes);
router.use('/', function(req, res) {
  res.send('<html><body><h1>Welcome to ENDOrSE!</h1></body></html>');
});

module.exports = router;