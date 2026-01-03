import React, { useCallback, useEffect, useState, useRef } from 'react'

const ExpensiveComponent = () => {

    const [count, setCount] = useState(null)
    const [text, setText] = useState('')
    const previousFn = useRef(null); //one empty object created 

    const expensiveCalculation = useCallback(() => {
        console.log("Running the expensive calculation...")
        let result = 0;
        for (let i = 0; i<=10000000; i++){
            result += i;
        }
        return result;
    }, [count]) //[count]- fn will recreated only when the value of count is changed

    //Lets verify fn re-creation

    useEffect(()=>{
        if(previousFn.current){ //if previousFn.current already have a reference then,compare both
            if(previousFn.current === expensiveCalculation){ 
                console.log("Function is not re-created")
            }
            else{
                console.log("Function got re-created")
            }
        }
        else{ // if previous.current==null
            previousFn.current = expensiveCalculation; 
        }

    },[expensiveCalculation]) //fn will not re-created when we add a text, because it is not dependent on text (its dependent on only count)

  return (
    <div>
      <input 
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='Type something'
      />
      <br />
      <p>Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default ExpensiveComponent


// when we type something or inc , the whole child component is re-rendering
// during re-rendering the expensive fn is also re-creating and re-rendering
// to stop re-rendering(re-run) we can use react.memo()

//using useCallback we can stop the re-creation of the fn
// we have to wrap that fn inside :  const cachedFn = useCallback(fn, dependencies)
//now fn will no re-created, means fn reference will not be change

// run the code & understand



