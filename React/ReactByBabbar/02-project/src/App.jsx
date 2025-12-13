
import './App.css'
import UserCard from './components/UserCard.jsx'
import my from "../src/assets/my.jpg"
import holden from "../src/assets/holden.avif"
import walter from "../src/assets/walter.webp"


function App() {


  return (
    <div className='container'>
      <UserCard name="Holden ford" desc="Description 1" img = {holden}  style={{"border-radius":"10px"}}/>
      <UserCard name="Tarun"  desc="Description 2" img={my}  style={{"border-radius":"10px"}}/>
      <UserCard name="Walter white"  desc="Description 3" img={walter}  style={{"border-radius":"10px"}}/>
    </div>

    
  )
}

export default App
