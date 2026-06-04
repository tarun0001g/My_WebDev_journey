//core module
const path = require('path');


//External Module
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session); //creating a session Store to sore session data in MongoDB Database.
const mongoUrl = "mongodb+srv://alex:alex@alximpossible.zadlbkc.mongodb.net/bookMyStay?appName=AlxImpossible";


//Local/Internal Modules
const authRouter = require('./routes/authRouter.js');
const storeRouter = require("./routes/storeRouter.js"); //router imported 
const {adminRouter} = require("./routes/adminRouter.js"); //router imported as an object
const rootDir = require("./utility/fileHelperUtility.js");
const errorsController = require("./controllers/errors.js"); //we Imported as a specific value {} from object
const { error } = require('console');
const { default: mongoose } = require('mongoose');

const app = express();
app.set("view engine", "ejs"); // Tells Express: Use EJS files for frontend rendering”
app.set("views", path.join(__dirname, "views")); //Tells Express where EJS files are stored.

const store = new MongoStore({
  uri: mongoUrl,
  collection: "sessions"
})

app.use(session({ //This is storing session data in our device's memory, so each time when server restarts, session data will be re-initialized and lost or reset. So in production we need a proper database like MongoDB to store session data.
  secret: "bookMyStay",
  resave: false,
  saveUninitialized: true,
  store: store // To store session data in MongoDB store instead of memory.
}));


app.use(express.urlencoded()); //Converts form data into: req.body object
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
  //console.log("Middleware for checking cookies", req.get("Cookie")); // we will get:- Middleware for checking cookies isLoggedIn=true
  //Above cookie is coming in string format, we need to convert it into obj format. for that we need to break cookie using split method.
  //req.isLoggedIn = req.get("Cookie")? req.get("Cookie").split("=")[1] === "true" : false; // checking... if true then req.isLoggedin=true;
  //Now we will read the data of session instead of direct cookie. 
  req.isLoggedIn = req.session.isLoggedIn;
  next();
})

app.use(authRouter);
app.use(storeRouter); 
//Middleware for checking user login status
app.use("/admin", (req, res, next) => { //Run this middleware for every route starting with /admin
  if(req.session.isLoggedIn) { // if user is loggedin 
    next(); // It tells that "Middleware finished, move to next middleware/route"
  }
  else{ //If User NOT Logged In then User is redirected to login page
    res.redirect("/login");
  }
})
app.use("/admin", adminRouter); // Every route inside adminRouter starts with: /admin


//Adding 404 Error when URL not found
app.use(errorsController.pageNotFound);


//MongoDB connection and server start
const PORT = 3005;

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




