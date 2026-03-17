

//NORMAL SERVER CREATION USING NODEJS (WITHOUT EXPRESS):- 

// const http = require("http"); //Core module added
// const requestHandler = require('./user'); //Local module added
// const server = http.createServer(requestHandler); 

// server.listen(PORT, () => {
//   console.log(`The server is running at http://localhost:${PORT}`);
// });

//BASIC SERVER CREATION USING EXPRESS.JS:-

// const http = require("http"); ////Core modue:- we dont need when we use express, because express has predefined

// const express = require("express"); //External module added

// const app = express(); //app is also kind of request handler (like requestHandler) who takes req & res as params 

// const server = http.createServer(app); 

// const PORT = 3005;
// server.listen(PORT, () => {
//   console.log(`The server is running at http://localhost:${PORT}`);
// });



// REDUCED SERVER CREATION USING EXPRESS:-

// const express = require("express");
// const app = express();

// //Adding middleware 
// app.use((req, res, next)=>{ //.use() is used to add middleware
//   console.log("In first middleware!", req.url, req.method);
//   next(); //it will move to next middleware
// })
3
// app.use((req, res, next)=>{
//   console.log("In second middleware!", req.url, req.method);
//   //Sending response in middleware
//   res.send("<h2>Nice to meet you sir!</h2>");
// })

// const PORT = 3005;
// app.listen(PORT, () => {
//   console.log(`The server is running at http://localhost:${PORT}`);
// });

//HANDLING ROUTES IN EXPRESS.js:-
const express = require("express");
const app = express();

//Note:- if methods are clearly defined then the browser will strictly check url and method to execute fn
app.use("/", (req,res,next)=> { //it will not strictly check the url & method
  console.log("In the first middleware!", req.url, req.method); 
  //res.send("<h1>From first middleware!</h1>"); //cannot send next after send()
  next();
})

app.get("/", (req,res,next)=> { //fn will exuted only when the url is "/" & GEt method, 
  console.log("In the another middleware!", req.url, req.method); 
  res.send("<h1>From another middleware!</h1>");
  // next();
})

app.post("/submit-details", (req,res,next)=> { // Now browser will striclty check url and post method to execute fn
  console.log("In the submit details middleware!", req.url, req.method); 
  res.send("<h1>Details Submitted Successfully!</h1>");
  // next();
}) 

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});











