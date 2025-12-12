import { useState } from 'react' //hooks imported here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 5; //this variable cannot directly/automatically reflect/update on UI

//useState(any_default_value like true/false/{}/''/tarun) //this hook propagate all changes in UI at a time

//useState(15) returns an array with two elements: the current state and a function to update it, so we need to save those values
//in this hook var and its updating method should declared as: [value,setValue]

let [counter, setCounter ]  = useState(5); //here counter variable is created, so we don't need to declare it. this var will automatically updated on UI when its value is changed
//setCounter method will update the value of counter var  & reflect changes on UI 

  const addValue = () =>{
    // console.log("Value added", Math.random());

    counter = counter + 1;
    if(counter>20){
      counter = 20;
      console.log("value cannot be greater than 20!");
      setCounter(counter);
      return;
    }
    setCounter(counter)// called update mehod and updated value of counter in entire UI
    console.log("Value added",counter);

  }

    const removeValue = () =>{
      if (counter>=0){
      console.log("Value removed", counter);
      counter = counter - 1;
      setCounter(counter);
      }

    if(counter<0){
      counter = 0;
      console.log("value cannot be <0");
      setCounter(counter)
      return;
    }
     
    
  }

  return (
    <>
      <h1>Hooks Project</h1>
      <h2>counter value:{counter}</h2>
      <br />
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
