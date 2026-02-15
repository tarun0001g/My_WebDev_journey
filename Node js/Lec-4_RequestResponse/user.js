const http = require("http");
const fs = require('fs')

//In this file we have learnt how to take user input in form && after submission redirect to home page and also write some data in a file using fs module

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Taking user input</title></head>");
    res.write("<body>");
    res.write(" <h1>Enter your details here:</h1> ");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input type='text' placeholder='Enter Username' name='username' /> <br>");
    res.write("<label for='age'> Male</label>");
    res.write("<input type ='radio' name='gender' value='male'><br>");
    res.write("<label for='age'>Female</label>");
    res.write("<input type ='radio' name='gender' value='female'> <br>");
    res.write("<input type='submit' value='Submit'>");
    res.write("</form>");
    res.write("</body>");

    return res.end();
  } //Redirecting to another page after submission of form
   else if( req.url.toLowerCase() ==='/submit-details' &&
            req.method == "POST"){
          fs.writeFileSync('user.txt', 'User details submitted');
          res.statusCode = 302; //it is a status code of redirection
          res.setHeader('Location', '/' ); //redirecting to home page after form submission(we can choose any page to redirect)
          return res.end();
  }

  //By default this response will be sent (if no match found in url)
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>First server response</title></head>");
  res.write("<body> <h1>You are in a default page! </h1> </body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT);
  console.log(`The server is running at http://localhost:${PORT}`);
});
