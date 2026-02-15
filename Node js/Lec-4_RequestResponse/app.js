//SIMPLE NODE JS SERVER

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);

  //How to exit loop event?
  // process.exit(); //Stops the event loop and exit the server (stops the listening loop)
  //It will stop the server after first request from the client(browser)

  //Understanding request oject
  //   console.log(req.url, req.method, req.headers);

  //Sending response to the client
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<html>');
  // res.write('<head> <title>First server response</title></head>')
  // res.write('<body> <h1>Hello everyone! </h1>  <b></b> <h2>This is Tarun Makavana </h2> </body>')
  // res.write('</html>') ;
  // res.end();//to end response and send to the client

  //ROUTING REQUESTS - applying differet requests in url for different responses
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>First server response</title></head>");

  if (req.url === "/") {
    res.write("<body> <h1>Wlcome to the Home Page</h1> </body>");
    return res.end();
  }
   else if (req.url === "/products") {
    res.write("<body> <h1>You are in Products page </h1></body>");
    // res.end(); //this should not used because it will end the response and send to the client
    return res.end();
  }

  //By default this response will be sent (if no match found in url)
  res.write(
    "<body> <h1>You are in a default page! </h1> </body>",
  );
  res.write("</html>");
  res.end(); 
//   return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT);
  console.log(`The server is running at http://localhost:${PORT}`);
});
