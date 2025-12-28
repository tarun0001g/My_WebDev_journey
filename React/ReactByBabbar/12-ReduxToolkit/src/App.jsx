import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  
  //fetching the data from counterSlice
  const count = useSelector((state)=> state.counter.value);

  const dispatch = useDispatch(); // this hook used to dispatch any action

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  //dispatching reset action created by me
  function handleResetClick(){
    dispatch(reset());
  }

  const [amount, setAmount] = useState();

  function handleAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
        <p>Count: {count}</p>
        <button onClick={handleIncrementClick}> + </button>
        <button onClick={handleDecrementClick}> - </button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <br />
        <input 
        type='Number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleAmountClick}>Add amount</button>

    </div>
  )
}

export default App
