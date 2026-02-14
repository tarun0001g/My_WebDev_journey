//SIMPLE NODE JS SERVER
//we are in the server 


const http = require('http');

//The clint(browser) will send request to this server 
// function requestListener(req, res){ //any fn will take same this 2 arguments (request, response)
//   console.log(req);
// }
// http.createServer(requestListener);

//latest short technique to create server
 const server = http.createServer( (req, res)=>{ 
  console.log(req);
});

//we should make keep our server in the listening mode to listen the requests from the client(browser)

// server.listen(5000);
//now when we run node firstNode.js in terminal, the server will be started and in the litening mode and we can see the request object in the terminal when we send request from the browser by typing localhost:5000 in the address bar.

const PORT = 3000 ;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT); 
  console.log(`The server is running at http://localhost:${PORT}`)
})

