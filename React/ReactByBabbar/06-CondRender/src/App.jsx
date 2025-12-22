
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

  const[isLoggedIn, setLoggedin]=useState(true);

  //using if-else
    // if(isLoggedIn){
    //   return (<LogoutBtn/>);
    // }
    // else{
    //   return (<LoginBtn/>);
    // }

    //using ternary operator
    // return(
    //   <div>
    //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    //   </div>
    // )

    //using logical && operator

    if(!isLoggedIn){
      return <LoginBtn/>
    }

    return(
      <div>
        <h2>Welcome to the react</h2>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    )

    //using switch case/ Easy Return
    // switch(isLoggedIn){
    //   case true:
    //     return <LogoutBtn/>;
    //   case false:
    //     return <LoginBtn/>;
    //   default:
    //     return <h2>Something went wrong</h2>;
    // }

  

}

export default App
