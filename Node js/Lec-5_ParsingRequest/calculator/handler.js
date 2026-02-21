
const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) =>{
  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head> <title>Practice set - Calculator</title></head>
        <body>
          <h1>Welcome!</h1>
          <a href="./calculator">Go to the Calculator</a>
        </body>
      </html>
      `);
      return res.end();
  }
  else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head> <title>Practice set - Calculator</title></head>
        <body>
          <h2>Enter the values:-</h2>
          <form action = "/calculate-result"  method="POST">
            <input type="text" placeholder="Value 1" name="value1"/> 
            <input type="text" placeholder="Value 2" name="value2"/> 
            <input type="submit" value="Sum"  >
          </form>
        </body>
      </html>
      `);
      return res.end();
  }
    
    else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
      return sumRequestHandler(req, res); //when url and method is matches, then it will call this fn of module sum.js 
    }


  res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head> <title>Taking user input</title></head>
        <body>
          <h1>404 Page not found!</h1>
          <a href="./">Go to Home</a>
        </body>
      </html>
      `);
      return res.end();
  }




exports.requestHandler = requestHandler; 