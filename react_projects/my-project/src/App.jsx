import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";


function App() {

// let myObj = {
//   name:"holden",
//   age: 21
// }
// let myArr = [1,2,3,4,5,]

  return (
    <>
      <h1 className='bg-green-500 text-black p-3 rounded-xl' >Tailwind-test</h1>

    <Card username="Ms.Ford" btnText={"Contact Me!"}/>
    
    <Card username="Ms.Starlight" />
    
    


    </>
  )
}

export default App
