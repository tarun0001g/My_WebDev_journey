
//External Module
const express = require("express");
require("dotenv").config();

const cors = require('cors');
const path = require('path');

const mongoUrl = process.env.MONGO_URL;
const { default: mongoose } = require('mongoose');

//Local/Internal Modules
const rootDir = require("./utility/fileHelperUtility.js");
const errorsController = require("./controllers/errors.js"); //we Imported as a specific value {} from object
const { error } = require('console');
const { todoItemsRouter } = require("./routes/todoItemsRouter.js");

const app = express();
app.use(express.urlencoded()); //Converts form data into: req.body object
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

//Adding 404 Error when URL not found
app.use(errorsController.pageNotFound);

//MongoDB connection and server start
const PORT = 3007;

mongoose.connect(mongoUrl)
  .then( () => { //First we will connect to DB
    console.log("Connected with MongoDB");
    app.listen(PORT, ()=>{
      console.log(`The server is running at http://localhost:${PORT}`); //Then after we will start our server.
    });
  })
  .catch(error => {
    console.log("Error while connecting to DB", error);
  })  




