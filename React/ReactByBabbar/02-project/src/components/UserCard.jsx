import React from 'react'
import './UserCard.css'
import my from '../assets/my.jpg'

const UserCard = (props) => {
  return (
    <div className='user-card' style={props.style}>
        <p id='username'>{props.name}</p>
        <img id='my-image' src={props.img} alt={props.name}></img>
        <p id='user-desc'>{props.desc}</p>

    </div>
  )
}

export default UserCard
