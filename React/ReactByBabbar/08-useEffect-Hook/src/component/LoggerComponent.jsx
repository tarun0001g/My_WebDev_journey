import React, { useEffect, useState } from 'react'

function LoggerComponent() {
    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log('component is rendered or updated to: ',count);
    }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent
