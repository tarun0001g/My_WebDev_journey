import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/about');
  }


  return (
    <div>
      Dashboard
      <br />
      <button onClick={handleClick}>Go to About</button> 
      
      <Outlet/>  {/* Used To render child routs */}
    </div>
  )
}

export default Dashboard
