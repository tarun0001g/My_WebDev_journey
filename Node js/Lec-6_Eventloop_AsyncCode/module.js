
const fs = require("fs");
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
    req.on("data", (chunk) => { //.on is event listener, when data chunks is arrives from client, callback (chunk) fn is triggered
      console.log(chunk); 
      body.push(chunk);
    });

    //Buffering chunks (parsing chunks)
    req.on("end", () => {  //when all data chunks are arrived, this event will be triggered
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      //Actual parsing of data (converting data in useable format)
      const params = new URLSearchParams(parsedBody); //URLSearchParams parse encoded data(above data) (data in form of query string) and convert it into object format
      const bodyObj = Object.fromEntries(params); //converts data in Object format
      console.log(bodyObj);

      // const jsonString = JSON.stringify(bodyObj); // converts data in string
      //Now we want to store this data in our user.txt file, that can be used later for any purpose(like storing in database, showing in frontend, etc.)
      // fs.writeFileSync("user.txt", jsonString); //fs.writeFileSync will blocks execution untill its job is done, so will use async task instea of this
      fs.writeFile("user.txt", JSON.stringify(bodyObj), err =>{ // this will executes parallaly (don't need to wait for finishing)
          console.log("Data written successfully!");
          res.statusCode = 302; //it is a status code of redirection
          res.setHeader("Location", "/"); //redirecting to home page after form submission(we can choose any page to redirect)
          return res.end();
      }) 

    });
    
  }
  else {
    //By default this response will be sent (if no match found in url)
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>First server response</title></head>");
    res.write("<body> <h1>You are in a default page! </h1> </body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;


