
const express = require('express');
const path = require('path');

const rootDir = require('../utils/fileHelperUtility.js');
const homeRouter = express.Router();


homeRouter.get("/", (req, res, next) => {
  // res.send(`<h1>Welcome to Home Page</h1>`);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = homeRouter;