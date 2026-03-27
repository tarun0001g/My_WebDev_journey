# To add styling in our node-express project,
- we cannot add direct css file in our views folder, because browser cannot access http://localhost:3005/home.css because its a non static file, our node server provide privacy to on accessing static files

- so we need to make a static css file, by putting it in the public folder.
- after that we will add one middleware in our app.js file (server file) to make public folder as a static folder, then after we can access styling in html file. 
- Middleware:-  app.use(express.static(path.join(rootDir, 'public')));
- note:- we will give direct file link in href="home.css" of html file ()
# We can also add styling using tailwind css. 

-------------------------------------------------------------------------------------------------------------------------------------------
# In this Project we will add or use EJS for dynamix UI  rendering 
EJS(Embedded javaScript)= JS within HTML
- EJS (Embedded JavaScript) lets you create dynamic UI by mixing HTML + JavaScript.
# How it works
    1. User requests page
    2. Server (Express.js) sends data
    3. EJS uses that data to create HTML
    4. Browser shows dynamic UI
# EJS used to Show data from server, Display user-specific content, Add conditions (if/else)
Install:-  npm install --save ejs
then add this in app.js after express():  const app = express();
                                          app.set("view engine", "ejs");
                                          
- Html file name will be change as home.ejs (.ejs)
- then we will add js code inside <% %>, <%= %>  (to show/print/add value in html tag), <%- %>
- to link and send data to html file we will use : res.render('home', {registeredHomes});  
res.render(.ejs file, object/variable)                                         

# Partials :- 
- Partials = reusable pieces of UI (small HTML parts)
- Partials are small files (like header, footer) that you reuse in many pages
- Partials are reusable template files in EJS used to avoid code repetition and maintain a consistent UI.
- Import any partial:- Ex. <%- include("partials/header") %>

# Note:- use "npm run dev" to run server.