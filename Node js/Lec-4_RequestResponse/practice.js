//This is the practice file for request and response in node js
// we are going to create basic and simple myntra clone which will have different pages and one home nav bar

const http = require("http");

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/html");
  // res.write('<h1>Welcome to Myntra</h1>');


  if(req.url==='/home'){
    res.write('<h2>Welcome to the Home page</h2>')
    return res.end();
  }
  else if(req.url.toLowerCase()==='/men'){
    res.write("<h2>Welcome to the Men's page</h2>")
    return res.end();
  }
  else if(req.url.toLowerCase()==='/women'){
    res.write("<h2>Welcome to the Women's page</h2>")
    return res.end();
  }
  else if(req.url.toLowerCase()==='/kids'){
    res.write("<h2>Welcome to the Kids page</h2>")
    return res.end();
  }
  else if(req.url.toLowerCase()==='/cart'){
    res.write("<h2>Welcome to the cart page</h2>")
    return res.end();
  }

  res.write(`
<html>
  <head>
    <title>Myntra Clone</title>
  </head>
  <body>
    <nav>
      <ul>
        <li> <a href="/home">Home</a> </li>
        <li> <a href="/men">Men</a> </li>
        <li> <a href="/women">Women</a> </li>
        <li> <a href="/kids">Kids</a> </li>
        <li> <a href="/cart">Cart</a> </li>
      </ul>
    </nav>
  </body>
</html>
    `);
   res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
