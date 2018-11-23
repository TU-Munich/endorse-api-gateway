"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const api     = require('./src/api/index');
const config     = require('./src/config');
const ApiService = require('./src/services/apiService');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(api);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(config.port, function() {
  console.log('Listening on port ' + config.port);
});

// Example of new ApiService
let endorseNlpService = new ApiService(config.nlpServiceBaseUrl, 'application/json', 'application/json', 'Basic', '');
let func = async () => {
  try {
    const response = await endorseNlpService.get('/api/1/spacy/hello', '');
    console.log(response)
  } catch (e) {
    console.log(e);
  }
};
