import { useState } from 'react'
import './index.css'; 
import Header from './Components/Header';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Components from './Components/Components';
import ProductDetails from './Components/ProductDetails';



function App() {
 

  return (
    <>
      <Header/>
       
      <Banner/>
      <Components /> 
       {/* Commenting because of to work third condition of useEffect */}

      {/* <Form /> */}
      
      <ProductDetails />
     
    </>
  )
}

export default App
