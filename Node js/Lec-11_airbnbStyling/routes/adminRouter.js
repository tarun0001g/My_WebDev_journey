
const path = require("path"); //core module

const express = require("express");// external module
const rootDir = require("../utility/fileHelperUtility.js")

const adminRouter = express.Router(); 

adminRouter.get("/add-home", (req, res, next) => {
    // res.send(`<h2>Add your home details here:</h2>
    // <form action="/admin/add-home" method="POST">
    //   <input type="text" name="HomeName" placeholder="Enter your home name">
    //   <input type="submit" value="Submit">
    // </form>
    // `)
    // res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
    res.sendFile(path.join(rootDir, 'views', 'addHome.html')); //using file helper
})

adminRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  // res.send(`<h2>Home registered successfully!</h2>
  //   <a href="/">Go to Home</a>
  //   `)
  // res.sendFile(path.join(__dirname, '../' , 'views', 'homeAdded.html')); //using file helper
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

module.exports = adminRouter;