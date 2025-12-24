import { useEffectEvent, useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LoggerComponent from './component/LoggerComponent';
import TimerComponent from './component/TimerComponent';
import DataFetcher from './component/DataFetcher';
import ResizeComponent from './component/ResizeComponent';
import MultieffectComponent from './component/MultieffectComponent';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  //first -> side effect function
  //second -> cleanup function
  //third -> array / comma sepatated dependency list

  //syntax of useEffect
  // useEffect(()=>{
  //   first; // runs when,When the component mounts (first time it appears), runs everytime when third changes

  //   return ()=>{
  //     second; //runs when, When the component unmounts(dissappears) & runs Before the first runs again (when third changes)
  //   }
  // }, [third]) //dependency array: tells react that, Run the first only when third changes

  //variation - 1:
  //runs on every render/every change, when no depedency array is provided
// useEffect(()=>{ //in this variation, first will run before every render/change
//   alert("i will run on every render");//in strictmode it will runs twice
// })

//variation - 2:
//runs on only first render, when empty depedency array is provided
// useEffect(()=>{
//   alert("I will run only on first render");
// }, [])

//variation - 3:
//runs on first render and when the dependency(third) changes
// useEffect(()=>{
//   alert("i will run everytime when count is changed")  //it runs on first render cause count is changed from undefined to 0
// }, [count]);

//variation - 4:
//multiple dependencies in the array
// useEffect(()=>{
//   alert("i will run everytime when count or total are changed")
// }, [count, total])

//variation - 5:
//let's add a cleanup function in this example
// useEffect(()=>{
//   alert("Count has been updated to: " + count);

//   return ()=>{ //cleanup fn will run everytime before the first fn runs again and when the component(count) unmounts(updated)
//     alert("Cleanup: Component unmounted & Previous count was: " + count); 
//   }
// }, [count])





function handletotalClick(){
  setTotal(total + 1)
}

function handleClick(){
  setCount(count+1);
}


  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultieffectComponent/>


       {/* <button onClick={handleClick}>Click me</button>
      <p>Count is: {count}</p>
      <br />
      <br />
      <button onClick={handletotalClick}>Update total</button>
      <p>Total is: {total}</p> */}
    </div>
  )
}

export default App
