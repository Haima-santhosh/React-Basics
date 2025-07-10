import { useState,useEffect } from "react"
import "./assets/css/App.css"
import Products from "./components/Products";
import axios from 'axios';




function App() {


  const[products,setProducts]=useState([])


  useEffect(()=>
  {
  // fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => 
  //   {
  //     console.log(data)
  //   setProducts(data)
  // });
  axios.get('https://fakestoreapi.com/products').
  then(res=>setProducts(res.data));
 
  
  
  },[])

 

  return (
    <>



<h2>Products</h2>
<div className="productsContainer">
  {products.map((product,index)=>{
return(
  <div className="productItem">
<Products product={product} key={index}/>
    </div>
)
})}
</div>


    </>
  )
}

export default App


