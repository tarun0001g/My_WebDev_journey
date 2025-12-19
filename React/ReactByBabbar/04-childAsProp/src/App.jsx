import { useState } from 'react'
import Card  from './components/Card'
import './App.css'
import Button from './components/Button.jsx'

function App() {
  let [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>

    <Button incClick={handleClick} counter={count} />


    {/* Passing function as a prop */}
    


      {/* Passing props as children 
      <Card name="Tarun " surname="Makavana"/>
            <h2>Hello Tarun</h2>
            <p>Good Morning</p>
      <Card/>
      <Card children="I am second Child"/>
      <p>This is Second Card</p>  
      <Card/> */}
    </div>
  )
}

export default App


