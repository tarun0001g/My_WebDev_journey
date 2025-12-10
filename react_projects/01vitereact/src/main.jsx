import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//   return(
//     <div> // at the end this whole returned block{< MyApp />} is coverted into an object by react bundler, & then react executes/renders it
//       <h2>Custom React App</h2>
//     </div>
//   )
// }

// const reactElement = {
//     type: 'a',  
//     props: { 
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     children : 'Click me to vist Google'
// }

const anotherElement = ( //writing HTML inside JavaScript,But actually, this is JSX (JavaScript XML) — a special syntax React uses
  <a href="https://google.com" target='_blank'>Visit Google</a> 
)  ////Babel (the React compiler) converts it into plain JavaScript.

const anotherUser = "Alex";//GLOBAL JS variable for explanation

//How the actual react creats/parse the object, 
//The actual react, accepts the jsx in folloing format using React.createElement fn
const realReactElement = React.createElement(
  'a' ,//first parameter as expected should be any tag
  { href :'https://google.com', target: '_blank'  }, //second parameter should be an Object/Properties, which contains only attributes, if tag dosen't hve any attributes then we can make it as empty
  'Click me to visit Google ',//3rd should be any text

  //at the end of creation of tree, js varables injection happes here, JS  evaluated outcomes added here
  anotherUser // variable added as it is

)


createRoot(document.getElementById('root')).render(
  //  <App/> //At the end, this is the the fn call of App fn, who is returning some jsx content, which converted in react Element (object)-->then rendered/executed/processed by react

  // <MyApp /> //this syntax comes from react bundler
   // MyApp() we can call fn using this method
  //anotherElement // it will converts into object by react & then run
  // that is why reactElement doesn't run here, which is already an object , cause .render fn is also expecting some eligible input from here as like in customReact
  
  realReactElement //selfmade actual and valid react element

)

//The App.jsx is indirectly a function 

//Every react uses  its own bundler : a bundler who runs behind the scene, it converts jsx tag into react element. & makes a tree of elements
// bundler works for - modification of syntax, correct the syntax, arrange the syntax, 

// This line mounts our React app into the 'root' div in index.html.
// 1. createRoot() → Creates a React root (where React controls the UI).
// 2. render(<App />) → Renders the given JSX/component inside that root.
// React takes the JSX (or component), converts it into a virtual DOM element,
// and efficiently updates the real DOM on the webpage.
// createRoot(document.getElementById('root')).render(<App />);