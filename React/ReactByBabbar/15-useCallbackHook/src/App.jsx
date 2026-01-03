import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0)
 
  // SYNTAX: const cachedFn = useCallback(fn, dependencies)

  // const handleClick = useCallback(()=>{ //noe fn is freezed
  //   return setCount(count +1);
  // }, []); //[count] fn will only re-created when count is changed 
  

  return (
    <div>
      {/* <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
      <br />

      <div>
        <br />
        <ChildComponent 
          ButtonName='Click me'
          handleClick={handleClick}
          />
      </div> */}

      <ExpensiveComponent/>

    </div>
  )
}

export default App
//When we Normally INC the count then whole App() is re-renderring  again and again
//that's why <ChildComponent/> is also re-renderinng, even if there is no need of re-rendering

//To solve this issue we use React.memo in ChildComponent.jsx file and wrap the entire logic in React.memo

//NOTE: React.memo will only save re-rendering when you send specific values in props
// React.mem freeze only those props values who are not going to be change, but when it change the component will completely re-rendered
// But when you send any function as a prop then, it cannot able to save component from re-rendering

// now to freeze fn reference we will use useCallback Hook
// SYNTAX: const cachedFn = useCallback(fn, dependencies)


//useCallback is used to handle or prevent function re-creation on every re-render





