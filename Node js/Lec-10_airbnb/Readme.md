


creating html files 
adding html files (serving the files) using path 
- import path module (core module)

using file helper 
# File Helper (Your Own Utility File(custom file) not Built-in ):-
-  A file helper is a small support file in a Node.js project that helps you easily access other files using a fixed base path.
- Instead of writing long and confusing paths like: ../../../views/home.html to find html/other files. File helper gives you a common(stable) starting point (project root) to reach any file in your project.

- Without file helper:
                         path.join(__dirname, "../../../" , "views", home.html")

- With file helper:
                        const rootDir = require("../utils/fileHelper");
                        const filePath = path.join(rootDir, "views", "home.html");

- Instead of giving relative paths for html files connection, we will give one absolute path that can be used for evry connection.