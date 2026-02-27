//Core modue added
// const http = require("http"); //we dont need when we use express, because express has predefined

//External module added
const express = require("express");
//Local module added
// const requestHandler = require('./user');
const app = express(); //app is also kind of request handler, it 

//Adding middleware
app.use((req, res, next)=>{ //.use() is used to add middleware
  console.log("In first middleware!", req.url, req.method);
  next(); //it will move to next middleware
})

app.use((req, res, next)=>{
  console.log("In second middleware!", req.url, req.method);
  //Sending response in middleware
  res.send("<h2>Nice to meet you sir!</h2>")
})


const PORT = 3005;

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

// const server = http.createServer(app); // we also don't need this

// server.listen(PORT, () => {
//   console.log(`The server is running at http://localhost:${PORT}`);
// });
