//core module
const path = require('path');

//External Module
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //specifies the view folder and its location. (By default it has this same line internally)

const userRouter = require("./routes/userRouter.js"); //router imported 
const {adminRouter} = require("./routes/adminRouter.js"); //router imported as an object
const rootDir = require("./utility/fileHelperUtility.js")

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir, 'public')));

app.use(userRouter); 
app.use("/admin", adminRouter); 

//Adding 404 Error when URL not found
app.use((req, res, next) => {
  res.render('404', {pageTitle: 'Page not found!'}); 
}) 

const PORT = 3005;
app.listen(PORT, ()=>{
  console.log(`The server is running at http://localhost:${PORT}`);
})




