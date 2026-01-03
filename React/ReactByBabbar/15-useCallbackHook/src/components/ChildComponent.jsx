import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    console.log("Child Component is re-rendering again!!");
    return (
        <div>
            <button onClick={props.handleClick} >
                {props.ButtonName}
            </button>
        </div>
  )
}
);

export default ChildComponent
//Explanation:
// Wrap component(ChildComponent) in -> React.memo() 
// now component will not re-rendered untill we change its props value
//  in otherwords, Component will only re-rendered when its props value is changed

//NOTE, React.memo will only save re-rendering when you send specific values in props
// It prevents re-run of child component
// But when you send any function as a prop then, it cannot able to save component from re-rendering

// This is happening because, when App re-render, all the functions in it are re-created & and new fn references are allocated to them by default
// now during re-rendering childcomponnet thinks fn ref inside child & inside parent component(App()) is diffrent (old ref != new ref)
// due to that difference React.memo can't able to stop re-rendering of childComponent

  


