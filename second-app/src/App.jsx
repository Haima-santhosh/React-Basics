
//creating a counter using function components
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
   const addCount=()=>{
    setCount(count+1)
   }
   const subCount=()=>{
    setCount(count-1)
   }

  return (
    <>
     <h2>{count}</h2> 
     <button onClick={addCount}>Add Count</button>
     <button onClick={subCount}>Subtract Count</button>
    </>
  )
}

export default App
