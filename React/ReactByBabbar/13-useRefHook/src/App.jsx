import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // On each re render this whole App() fn is runs
  
  // BSAIC UNDERSTANDING OF useRef()

  // const [count, setCount] = useState(0);
  // // let val = 1;
  // let val = useRef(0);
  //  //useRef is used to access/change any DOM element directly
  //  let btnRef = useRef();

  // function handleIncButton(){
  //   // val = val + 1; // During re render val is showing same value 
  //   // during re-render val is not able to persist(update/change/increment) its value 
  //   val.current = val.current + 1; // now we made val.current as a persistent variable
  //   console.log("Value of val is: ",val.current);
  //   setCount(count+1);
  // }

  // useEffect(() => {
  //   console.log("I will run on every render")
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'red';
  // }

  //STOPWATCH EXAMPLE STARTS HERE

  const [time,setTime] = useState(null);
  let timeRef = useRef(null);

  function startBtn(){
    timeRef.current = setInterval(()=>{
      setTime(time => time + 1)
    },1000)
  }

  function stopBtn(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetBtn(){
    stopBtn();
    setTime(0);
  }
//STOPWATCH EXAMPLE ENDS HERE


  return (
    // <div>
    //   <button ref={btnRef} onClick={handleIncButton}>Increment</button>
    //   <br />
    //   <br /> 
    //   <button onClick={changeColor}>Change Color of Above Button</button>
    //   <br />
    //   <br /> 
    //   <h2>Count: {count}</h2>
    // </div>

    //STOPWATCH EXAMPLE
    <div>
      <h1>Stopwatch</h1>
      <h2>Seconds {time}</h2>
      <br />
      <button onClick={startBtn}>Start</button>
      <br /><br />
      <button onClick={stopBtn}>Stop</button>
      <br /><br />
      <button onClick={resetBtn}>Reset</button>
      <br /><br />
    </div>

  )
}

export default App
