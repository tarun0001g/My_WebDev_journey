
const http = require("http");
const requestHandler = require('./module'); // importing requestHandler fn from module.js file

const server = http.createServer(requestHandler);



const PORT = 3001;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT);
  console.log(`The server is running at http://localhost:${PORT}`);
});


