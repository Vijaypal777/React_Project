import { useState } from 'react'
import './App.css'
// import ExampleComponent from './components/ExampleComponent';

function App() {
  const [count, setCount] = useState(0)

  const increment1 = () => {
    setCount(count + 1);
  };

  const decrement1 = () => { 
    setCount(count - 1);
  };

  return (
    <>
     <div>
     <h1>Vijay</h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment1}>Add</button>
      <button onClick={decrement1}>Remove</button>
     </div>

{/* 
      <ExampleComponent/> */}
  
    </>
  )
}

export default App
