
const path = require('path'); //core module
const express = require("express"); // external module
const rootDir = require('../utility/fileHelperUtility.js');//custom module (helper file)
const { registeredHomes } = require('./adminRouter.js'); //imported as an object

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
   res.render('home', {registeredHomes: registeredHomes, pageTitle: "Welcome to AirBnB!", pageName: "Home"});
})

module.exports = userRouter;

