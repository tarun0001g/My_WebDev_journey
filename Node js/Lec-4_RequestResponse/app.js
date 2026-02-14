//SIMPLE NODE JS SERVER

const http = require('http');

 const server = http.createServer( (req, res)=>{ 
  // console.log(req);

  //How to exit loop event?
  // process.exit(); //Stops the event loop and exit the server (stops the listening loop)
  //It will stop the server after first request from the client(browser) 

  //Understanding request oject
  console.log(req.url, req.method, req.headers);

   //Sending response to the client
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head> <title>First server response</title></head>') 
   res.write('<body> <h1>Hello everyone! </h1>  <b></b> <h2>This is Tarun Makavana </h2> </body>') 
   res.write('</html>') ;
   res.end();//to end response and send to the client
});

const PORT = 3000 ;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT); 
   console.log(`The server is running at http://localhost:${PORT}`)
})

