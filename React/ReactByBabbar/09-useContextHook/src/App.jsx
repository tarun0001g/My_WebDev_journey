
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

  //step-1: Create the context
  // const myContext = createContext();

  //step-2: Wrap all childs inside the provider(means wrap those all possible childs who wants to be a consumer of the data)
  // <myContext.Provider> means all childs from child A->B->C can be the consumer. cause, all childs are linked from child-A

  //step-3: Pass the value for consumers

  //step-4: export myContext at bottom [  export {myContext}  ]

  //step-5: Go to the consumer child & consume the value

  const ThemeContext = createContext();


function App() {
  // const [user, setUser] = useState({name:"Tarun", age:21})
  // const name = "Tarun";
  const [theme, setTheme] = useState('light');

  return (
    

      <ThemeContext.Provider  value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"cornflowerblue":"darkgrey"}}>
          <ChildA/>
        </div>
      </ThemeContext.Provider>

   
  )
        {/* <ChildA/> */}
      {/* <myContext.Provider value={user}>
          <ChildA/>
      </myContext.Provider> */}
}

export default App
// export {myContext}
export {ThemeContext}
