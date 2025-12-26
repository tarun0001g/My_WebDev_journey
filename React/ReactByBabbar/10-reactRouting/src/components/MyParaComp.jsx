import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const MyParaComp = () => {

    const {id} = useParams(); //useParams hook accessed

    const navigate = useNavigate(); //Use Navigation hook accessed

    function handleClick(){
        navigate('/');
    }

  return (
    <div>
      <h2>Paramter ID: {id}</h2>
      <br />
      
      {/* Navigation using button click */}
      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default MyParaComp
