import { useMemo, useState } from 'react';
import './App.css'

function App() {
  const [count, setCount]= useState(0);
  const [input, setInput]= useState(0);

  function expensiveTask(input){
    console.log("Inside expensive task")
    for(let i=1; i<=1000000000; i++){
      // fake time consuming loop
    }
    return input*2;
  }
  // const finalValue = expensiveTask(input);
 const finalValue = useMemo(() => expensiveTask(input), [input])

//Explanation:
// When we click on increment it updates setCount and entire App() fn will be re-rendered also expensive fn is also re-executed unnecessarily that is why increment becomes slower.
//Syntax:
//const cachedValue = useMemo(calculateValue, [dependency_values]);


  return (
    <div>
      <h2>UseMemo Hook</h2>
      <br />
      <button onClick={()=> setCount(count + 1) }>Increment</button>
      <br />
      <h3>Count: {count}</h3>
      <input 
      type="number" 
      value={input} 
      placeholder='Enter Number'
      onChange={(e)=> setInput(e.target.value)}
      />
      <h3>Double: {finalValue}</h3>
    </div>
  )
}

export default App
