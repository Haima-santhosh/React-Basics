import { useState } from 'react'
import './index.css'; 
import Header from './Components/Header';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Components from './Components/Components';



function App() {
 

  return (
    <>
      <Header/>
       {/* <Components /> */} 
       {/* Commenting because of to work third condition of useEffect */}
      <Banner/>
      <Form />
     
    </>
  )
}

export default App
