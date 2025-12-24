import React, { useEffect, useState } from 'react'

const MultieffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        console.log("Count is changed to: ",count);
    }, [count]); //it will runs everytime only when count is changed

    useEffect(()=>{
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds +1);
        }, 1000);

        return() =>{
            clearInterval(interval);
        }
    },[]) //runs only on first render

  return (
    <div>
      
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count +1)}>Increment Count</button>
        <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultieffectComponent
