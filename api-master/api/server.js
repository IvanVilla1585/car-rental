'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();
const port = config.port || 8000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});