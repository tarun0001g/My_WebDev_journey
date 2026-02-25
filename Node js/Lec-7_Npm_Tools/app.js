
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
})

 

const PORT = 3005;
server.listen(PORT, () => {
  // console.log('The server is running at http://localhost:' + PORT);
  console.log(`The server is running at http://localhost:${PORT}`);
});


