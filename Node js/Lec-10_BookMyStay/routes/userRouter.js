
const path = require('path'); //core module
const express = require("express"); // external module
const rootDir = require('../utility/fileHelperUtility.js')//custom module (helper file)

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  // console.log(req.url, req.method);
  // res.send(`<h2>Welcome to Air bnb!</h2>
  //   <a href="/admin/add-home">Add Your Home</a>
  //   `)
  // res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
   res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = userRouter;

