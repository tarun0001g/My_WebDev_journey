
In this file,
 we wil parse the incoming user request. (Parsing Request)

# Parsing Request :- Getting data sent by the user (form, JSON, etc.) and converting it into usable format.
-> When a user sends data (like a form or API request), it comes in raw format. Express cannot understand it directly. 
so that we convert(parse) it into an object.

- For parsing any request we need a 'body-parser' package. (It is not compulsory to import when we use express)
- we will just try to understand the concept and how to use it.

Body Parser:- It is a middleware(fn) that reads data send by the user and converts it into a javascript object.
whenever we want to parse the data(body), we will execute built-in middleware fn to parse them.( This fn is provided by the body-parser.)

1. install body-parser package:-  npm install body-parser --save
2. Import the bodyParse in file :- const bodyParser = require("body-parser");
3. Then execue the bodyparser middleware
4. Use the parsed data using (req.body)

-> we have checked that how the body will appear before data parsing and after data parsing 


