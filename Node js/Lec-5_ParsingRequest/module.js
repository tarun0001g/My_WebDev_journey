// const http = require("http");
const fs = require("fs");

//In this lecture, we understand about data,data-streans, chunks and we will also learn reading chunks of data (coming from client in the form), how to parse that data (means covert data in useable / understandable/ readable format)

// when client send data request as a Raw string/buffer/stream(in chunks) (in string/Json text/ Buffer(binary)) and server parse them in object/array/variable format and then we can use them.

//const server = http.createServer((req, res) => {
const requestHandler = (req, res) => { //puted entire code in single fn
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Taking user input</title></head>");
    res.write("<body>");
    res.write(" <h1>Enter your details here:</h1> ");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' placeholder='Enter Username' name='username' /> <br>",
    );
    res.write("<label for='age'> Male</label>");
    res.write("<input type ='radio' name='gender' value='male'><br>");
    res.write("<label for='age'>Female</label>");
    res.write("<input type ='radio' name='gender' value='female'> <br>");
    res.write("<input type='submit' value='Submit'>");
    res.write("</form>");
    res.write("</body>");
    return res.end();
  } 
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = []; // we will store all data chunks in this array and then we will parse them all together
    //Here we wil read data in form of chunks (that comes from client)
    // whenever the post request is comes, below method is executed on arrival of every data chunk
    req.on("data", (chunk) => {
      //.on is event listener, when data chunks is arrives from client, callback (chunk) fn is triggered
      console.log(chunk); //every data chunk will be show in buffer format (binary format) in sequence (.on also ensures the sequence of data )
      body.push(chunk);
    });

    //Buffering chunks (parsing chunks)
    req.on("end", () => {
      //when all data chunks are arrived, this event will be triggered
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      //Actual parsing of data (converting data in useable format)
      const params = new URLSearchParams(parsedBody); //URLSearchParams parse encoded data(above data) (data in form of query string) and convert it into object format
      // const bodyObj = {};
      // for (const [key,val] of params.entries()){
      //   bodyObj[key] = val;
      // }
      //shorthand method:-
      const bodyObj = Object.fromEntries(params); //converts data in Object format
      console.log(bodyObj);

      const jsonString = JSON.stringify(bodyObj); // converts data in string
      //Now we want to store this data in our user.txt file, that can be used later for any purpose(like storing in database, showing in frontend, etc.)
      // fs.writeFileSync('user.txt', bodyObj.username);
      fs.writeFileSync("user.txt", jsonString);
      //jason.strigify converts objects in string format, cause we can only store data in string format in file
    });
    res.statusCode = 302; //it is a status code of redirection
    res.setHeader("Location", "/"); //redirecting to home page after form submission(we can choose any page to redirect)
    return res.end();
  }
  //By default this response will be sent (if no match found in url)
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>First server response</title></head>");
  res.write("<body> <h1>You are in a default page! </h1> </body>");
  res.write("</html>");
  res.end();
};

// const PORT = 3000;
// server.listen(PORT, () => {
//   // console.log('The server is running at http://localhost:' + PORT);
//   console.log(`The server is running at http://localhost:${PORT}`);
// });

//Now we will module this code and export to the server and then we will import it in index.js file and run the server from there
//Module:- A module is a separate file that contains code (functions, variables, objects) which can be reused in other files.
// Node.js uses modular architecture,means Large applications are divided into small reusable files. 

// we will put all main code in one single fn and then we will export that fn, then we will import that fn in index.js file and run the server from there.

//MULTIPLE EXPORTS:

module.exports = requestHandler;

// module.exports = {
//  requestHandler,
// }

//setting multiple properties in module
// module.exports.handler = requestHandler;
// module.exports.extra = "Extra";

// //Shrtcut 
// exports.handler = requestHandler;
// exports.extra = "Extra";