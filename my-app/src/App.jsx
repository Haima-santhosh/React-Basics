import { Children, useState } from 'react'
// import { Header } from './components/HeadY
// Yer'
import HeaderComponet  from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponet/>
      {/* <Header/> */}
      <h1>Hello World!</h1>
      <div className="card">
        {count===2 &&<HeaderComponet/>}
         <Button handleclick={() => setCount((count) => count + 1)}>
          New Count is {count}
        </Button>
        {count===7 &&<HeaderComponet/>}
         <Button handleclick={() => setCount((count) => count + 1)}>
          New Count is {count}
        </Button>
       {count===9 &&<HeaderComponet/>}
         <Button handleclick={() => setCount((count) => count + 1)}>
          New Count is {count}
        </Button>
        {count===11 &&<HeaderComponet/>}
         <Button handleclick={() => setCount((count) => count + 1)}>
          New Count is {count}
        </Button>
        {count===14 &&<HeaderComponet/>}
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
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

const Button=({children,handleclick})=>{
  return(
    <button onClick={(()=>handleclick((count) => count + 1))}>
    {children}
    </button>
  )
}
