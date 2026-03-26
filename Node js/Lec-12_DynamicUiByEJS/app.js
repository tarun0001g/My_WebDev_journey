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

app.use(express.static(path.join(rootDir, 'public')));//It will make all files static inside public folder


app.use(userRouter); 
app.use("/admin", adminRouter); //Instead of writing long paths in routers, we can write some common path while using routers 

//Adding 404 Error when URL not found
app.use((req, res, next) => {
  // res.status(404).send(`<h1>Error 404: The page is not found!</h1>`);  //.status(404) :-shows the error code in backend
  // res.sendFile(path.join(__dirname, 'views', '404.html'));
  res.sendFile(path.join(rootDir, 'views', '404.html')); //with file helper
}) 

const PORT = 3005;
app.listen(PORT, ()=>{
  console.log(`The server is running at http://localhost:${PORT}`);
})

//-----------------------------------------------------------------------------------------------
// app.use((req, res, next) => {
//   console.log(req.url, req.method); //It will just shows the url & method of each current route  
//   next();
// })


