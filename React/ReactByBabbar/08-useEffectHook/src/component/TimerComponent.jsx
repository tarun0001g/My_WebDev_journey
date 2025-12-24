import React, { useEffect, useState } from 'react'

const TimerComponent = () => {

    const [seconds,setSeconds]=useState(0);


 //setInterval() is a JavaScript function used to run a piece of code repeatedly after a fixed time interval.
 //syntax: setInterval(function, time);


    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Seconds rendering started");
            setSeconds(prevSeconds => prevSeconds + 1);
         }, 1000)

         return() =>{
            console.log("Senconds countdown stopped");
            clearInterval(interval);
         }
    }, []);

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default TimerComponent
