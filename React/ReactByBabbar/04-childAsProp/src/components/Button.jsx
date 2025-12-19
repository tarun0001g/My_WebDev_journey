import React from 'react'

function Button(props) {
  return (
    <div>
        <h2>{props.counter}</h2>
      <button onClick={props.incClick}>Click Me</button>
    </div>
  )
}

export default Button
