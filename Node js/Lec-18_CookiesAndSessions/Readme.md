
Flow of Login Page:- 

whem we click on this nav tag <a href="/login"> 
        ↓

GET /login
        ↓

authRouter.get("/login")
        ↓

getLogin()
        ↓

res.render("auth/login")
        ↓

views/auth/login.ejs


## Checking login state:
- now we will show only limited nav items to user untill he /she logins.
- we will use isLoggedIn var check and add conditional rendering in nav.ejs file.
- we will pass isLoggedIn : req.isLogged in all res.render() fns in controllers.
- now there is one more pb, that user can still visit other pages by directly typing the url like localhost:3000/admin/add--home
- to solbe it we will create one middleware fn in authController 

## Maintaining state of request using cookies
- Cookies are small pieces of data stored in the user’s browser by server.
- They help websites remember user information and preferences between page loads or visits.

- after login submit we still not able to see the other navbar options, because each time new request is created so that 
isLogged = false is applied each time.
- after login we need to store the state of request where isLoggedIn becomes true.
- to store the state we will use cookies.
- we will set cookie in postLogin controller fn
- and we also have to read the cookie for every request to check isLoggedIn value
for that we will create one more middleware fn in app.js which will first read the cookie and then set the value of isLoggedIn. 

- Middleware explanation:-

req.get("Cookie"):- Reads cookies from browser request headers. browsrer returns string like "isLoggedIn=true"

- req.get("Cookie") ? ... : false :-  
This ternary operator says:
IF cookie exists
   do something ;//Splitting Cookie code:- req.isLoggedIn = req.get("Cookie")? req.get("Cookie").split("=")[1] === "true" : false;
ELSE
   false

.split("=") creates an array by splitting string at "=", so it becomes ["isLoggedIn", "true"]
.split("=")[1] return second element of array : "true" , where array looks like [[0] -> "isLoggedIn", [1] -> "true"]
 === "true" :- (Comparing with "true") Checks whether cookie value equals string "true".
req.isLoggedIn = ... :- Saving Custom Property means it becomes: req.isLoggedIn = true;

## Sessions:
- Sessions are a way to store user-specific data on the server across multiple requests in Express.js applications.
- when user login, server stores user's data and genereated  unique session ID and send it to browser as a cookie.
- HTTP is stateless, That means: Every request is independent/New in a web application.
- So session maintains user state and data across multiple requests in a web application. 
- sessions are stored on server.
- session enables persistent/continuous user exeperiences by maintaining state between the client and server over stateless HTTP protocol.
- User's data is stored in session store on server, and it generates a session ID

When a user visits your website:

Server creates a session object
Server generates unique session ID
Session ID sent to browser as cookie
Browser sends session ID on future requests
Server identifies user using that ID

- session({...}) :- creates session middleware.
- app.use(...) :- activates it for every incoming request.
- secret: "bookMyStay" :- Protect session cookie.
 a secret key used for generating signature for session ID cookie. it ensures integrity and prevent modification of session data by clients.
- resave: false :- says Do NOT save session again if nothing changed.
- saveUninitialized: true :- says save new empty sessions even if no data added(even if user does not log in, user did not done anything).
- Using req.session we can access and modify session data.
- we will log values of req.session in Home page in storeController
- we will also change the reading of cookie in app.js to read session data instead of data of cookie to set the value of isLoggedIn.  
- app.use(session({...}));  This is storing session data in our device's memory, so each time when server restarts, session data will be re-initialized and lost or reset. So in production we need a proper database like MongoDB to store session data.


## Session connecting with MongoDB:- 
- we will add this session middleware in app.js:-  store: store //To store session data in MongoDB store instead of memory.