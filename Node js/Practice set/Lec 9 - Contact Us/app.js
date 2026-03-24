
const express = require("express");

const app = express();

//Middlewares
app.get("/", (req, res, next) => {
  console.log("In the first dummy middleware",  req.url, req.method);
  next();
})

app.get("/", (req, res, next) => {
  console.log("In the second dummy middleware",  req.url, req.method);
  next();
})

app.get("/", (req, res, next) => {
  console.log("In the third dummy middleware",  req.url, req.method);
  // res.send("<h2>Hello from Third Middleware!</h2>")
  next();
})

//Home Page
app.get("/", (req, res, next) => {
  console.log("In the / GET middleware ", req.url, req.method);
  res.send(`<h1>Welcome to Home Page</h1>`);
})

//Gettinng User details (GET Request)
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET  middleware !", req.url, req.method);
  res.send(`<h1>In Contact Us Page</h1>
    <H2>Enter Your details below!</H2>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name">
    <input type="email" name="email" placeholder="Enter your email">
    <Button type="Submit">Submit</Button>
    </form>
    `);
})

//Handling User details (POST Request)
app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST  middleware !", req.url, req.method);
  res.send(`<h1>Thanks for submitting details!</h1>
    <h2>We will be in touch very shortly!!</h2>
    `)
})

const PORT = 3005; 
app.listen(PORT, () =>{
  console.log(`Serverr is running at http://localhost:${PORT}`);
})

