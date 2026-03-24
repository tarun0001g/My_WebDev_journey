

const express = require('express');//external module

const path = require('path'); //Internal module

const rootDir = require('../utils/fileHelperUtility.js'); //Local module

const contactUsRouter = express.Router();

//Gettinng User details (GET Request)
contactUsRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-usGet.html'));
})

contactUsRouter.use(express.urlencoded()); // express has this inbuilt body parser to parse the user data (form data) and add them in req.body 

//Handling User details (POST Request)
contactUsRouter.post("/contact-us", (req, res, next) => {
  console.log("Th data is:", req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-usPost.html'));
})

module.exports = contactUsRouter
