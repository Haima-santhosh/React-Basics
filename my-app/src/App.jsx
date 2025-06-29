import { Children, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Hello World!</h1>
      <div className="card">
         <button handleClick={() => setCount((count) => count + 1)}>
          New Count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

const Button=({children,handleClick})=>{
  return(
    <button onClick={(()=>handleClick((count) => count + 1))}>
    {children}
    </button>
  )
}
