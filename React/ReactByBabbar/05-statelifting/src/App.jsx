
import Card  from './components/Card'
import './App.css'
import { useState } from 'react'

function App() {
//the parent will,
// create state
// manage state
// change state
// & sync state with every child

const [name,setName]=useState('');

  return (
    <div>
        <Card title="Child-1" name={name} setName={setName}/> 
        <Card title="Child-2" name={name} setName={setName}/>
        <p>Name inside parent is: {name}</p> 

        {/* Here we, passed data/state from child to parent.
        indirectly, state lifted from one child to another child via parent.
        Both children stay in sync  */}

    </div>
  )
}

export default App
