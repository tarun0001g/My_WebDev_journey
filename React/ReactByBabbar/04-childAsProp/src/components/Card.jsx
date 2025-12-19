import React from 'react'

const Card = (props) => {
            //{{name,surname}} can be used for getting props directly
            //({children}) can be used to get children props directly
  return (
    <div>
      {props.name} <br /> {props.surname}
      {props.children}
        {/* {children} */}
    </div>
  )
}

export default Card
