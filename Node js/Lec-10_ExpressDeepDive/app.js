
const express = require("express");
const bodyParser = require("body-parser"); //package imported

const app = express();

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

//Before the data is parsed (the body will not shows the actual data from user reuqest)
app.post("/contact-us", (req, res, next) => {
  console.log("Before data parsing !", req.url, req.method, req.body);
  next();
})

//parsing the data using body-parser middleware
app.use(bodyParser.urlencoded()); //this will parse the data and add them in req.body

//-------------------------------Behind the scene middleware funtion---------------------------------------
// const body = []; //  store all data chunks in this array and then we will parse them all together
//     req.on("data", (chunk) => { //.on is event listener, when data chunks is arrives from client, callback (chunk) fn is triggered
//       console.log(chunk); 
//       body.push(chunk);
//     });

//     //Buffering chunks (parsing chunks)
//     req.on("end", () => {  //when all data chunks are arrived, this event will be triggered
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);

//       //Actual parsing of data (converting data in useable format)
//       const params = new URLSearchParams(parsedBody); //URLSearchParams parse encoded data(above data) (data in form of query string) and convert it into object format
//       const bodyObj = Object.fromEntries(params); //converts data in Object format
//       console.log(bodyObj);
//     })
//-------------------------------Behind the scene middleware funtion---------------------------------------


//Handling User details (POST Request) (the body will shows the actual parsed data from user request)
app.post("/contact-us", (req, res, next) => {
  console.log("After data parsing !", req.url, req.method, req.body);
  res.send(`<h1>Thanks for submitting details!</h1>
    <h2>We will be in touch very shortly!!</h2>
    `)
})

const PORT = 3005; 
app.listen(PORT, () =>{
  console.log(`Serverr is running at http://localhost:${PORT}`);
})

