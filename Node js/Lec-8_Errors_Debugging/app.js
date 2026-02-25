
const http = require("http");
const logical = require('./logical');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  logical();
})

 

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});


