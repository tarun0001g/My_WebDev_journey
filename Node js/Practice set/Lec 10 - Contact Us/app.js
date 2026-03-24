//External Module
const express = require("express");
const app = express();

//Internal Module
const path = require('path');

// Local Modules
const homeRouter = require('./routes/homeRouter.js');
const contactUsRouter = require("./routes/contact-usRouter.js");
const rootDir = require('./utils/fileHelperUtility.js');

//This is used before using req.body (user's form data)
app.use(express.urlencoded()); 

//Home Route
app.use(homeRouter);

//Contact-us Route
app.use(contactUsRouter);

//404 Error 
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 3005; 
app.listen(PORT, () =>{
  console.log(`Serverr is running at http://localhost:${PORT}`);
})

