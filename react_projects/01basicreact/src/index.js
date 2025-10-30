//EXPLANATION OF EACH LINES
import React from 'react'; // core foundational library
import ReactDOM from 'react-dom/client'; //it is a implementation of react on web. like react-native for Mobile application
//these two libraries are made to manipulate the Web DOM.

 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM - react have its own DOM, called virtual DOM. later it compared with main DOM for applying changes.
// in above line we stored reference of virtual dom in root variable

//React.StrictMode- property of react
// react gives powers that we can render html elements through JSX. we can see it below, we can create custom tags
root.render( 

    <App />

);  



// ctr + c = to stop run
// ctrl + ` = to open terminal
// npm run start = to execute code (in react)
// npm run dev = to execute code (in vite react)
 
