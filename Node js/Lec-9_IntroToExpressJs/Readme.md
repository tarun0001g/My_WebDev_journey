




# How to install express.js :-
 npm install express --save

 # How to use express ? 
 //first add module in file
 const express = require("express); //(External Module)

//then, execute express FN and store it in a app(variable);

# Middleware is a function that runs between request and response.
- multiple middlewares can be added between them.
ex. (req, res, next) => {...}
- next() is an extra argument or method used to call next middleware 
- The order of middleware is also very impotnat.

# Handling routes in express.js :-
- Routing means deciding how the server responds to a client request for a specific URL and HTTP method.
- Route = URL + Function that runs when that URL is requested

Rules:- 
  Order Matters
  Cannot call next() after  send() or end() (response)
  "/" matches everything that startss with "/"
  calling res.send() imlpcitly calls res.end()

- app.use() is wildcard and matches to all http methods(get,post,put,delete,etc...) - its fn  executed everytime
- app.get(), app.post() are executed only when there is a specific get/post requests are defined
- if methods are clearly defined then the browser will strictly check url and method to execute fn(middleware)






