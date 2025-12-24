import React, { useContext } from 'react'
// import { myContext } from '../App'
import {ThemeContext} from '../App'

const ChildC = () => {
    // const user = useContext(myContext);
     const {theme, setTheme} = useContext(ThemeContext)

     function changeTheme(){
        if(theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
     }

  return (
    <div>
      {/* {user.name}
      <br />
      {user.age}
      <br /> */}
      {/* {user} */}

        <button onClick={changeTheme}>
            Change theme
        </button>


    </div>
  )
}

export default ChildC
