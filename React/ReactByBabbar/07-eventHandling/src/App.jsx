


import './App.css'

function App() {
 
  function handleClick(){
    alert("Button is Clicked")
  }

  function handleMouseOver(){
    alert('Your cursor is on para')
  }

  function handleInputChange(e){
    // console.log("Value is changed in input field")
    console.log("Input value till now is:",e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();// a method used in React to stop the browser’s default behavior for an event.
    //like relading the page on submission, A button inside a form submits the form automatically
    alert("Form submit krdu kya?")
  }
  //e.stopPropagation()-It stops the event from moving to parent components
//When an event happens on an element, it travels through the DOM:
// Target – where the event happens,
//  Bubbling – event moves upward to parent elements,
// By default, React events bubble up.

  return (
    <div>


      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

        {/* wrong way
      <button onClick={alert("button clicked")}>Click me</button> 
      Correct way is below :*/}
       {/* <button onClick={()=>alert("button clicked")}>Click me</button> */}


      {/* way - 1 */}
      {/* <button onClick={handleClick}> Submit </button> */}

      {/* way - 2 */}
      {/* <button onClick={()=> alert("Button clicked")}> Submit </button> */}

      {/* Wrong Way (Do NOT do this)
      <button onClick={handleClick()}> this will call the function immediately */}

        {/* <p style={{border:"1px solid black"}} onMouseOver={handleMouseOver}>This is Para</p> */}

    </div>
  )
}

export default App
