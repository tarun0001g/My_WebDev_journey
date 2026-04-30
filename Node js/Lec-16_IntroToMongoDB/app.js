//core module
const path = require('path');

//External Module
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //specifies the view folder and its location. (By default it has this same line internally)

const storeRouter = require("./routes/storeRouter.js"); //router imported 
const {adminRouter} = require("./routes/adminRouter.js"); //router imported as an object
const rootDir = require("./utility/fileHelperUtility.js");

const errorsController = require("./controllers/errors.js"); //we Imported as a specific value {} from object
const { error } = require('console');
const {mongoConnect} = require('./utility/databaseUtility.js');


app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));

app.use(storeRouter); 
app.use("/admin", adminRouter); 

//Adding 404 Error when URL not found
app.use(errorsController.pageNotFound);

const PORT = 3005;
mongoConnect( () => { //First we will connect to DB
// console.log(client);
  app.listen(PORT, ()=>{
  console.log(`The server is running at http://localhost:${PORT}`); //Then after we will start our server.
  })
})





