
import Chai from "./chai"

function App() {
// in return we, can return only one tag at a time so we have to include all tags in one tag & then return it

//in JS we used `${variable}`
  const username = "Tarun "// to use this variable in jsx use {var_name}

  return (
    <>
    <h1>Hello  {username} </h1>
    {/* {username} is evaluated expression, so should add only final outcome of JS here */}
    {/* why only evaluated expression? and not more code of jS :because internally react compiler return only tree object to the browser which doesn't contain any JS logical expression */}
    <Chai/>
    <h3>I am very well and thanks for the chai!</h3>
    </>
  )
}

export default App
