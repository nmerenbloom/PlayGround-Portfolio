
const express = require('express');

// import * as express from 'express';
const monitor = require('site-monitor');
monitor(require('./config.json'));


const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});
