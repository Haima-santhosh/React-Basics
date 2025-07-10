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

  // const[value1,setValue1]=useState(1)
  // const[value2,setValue2]=useState(2)


  //1. useEffect(()=>
  // {
  //   console.log("Entered"); **********THIS WILL APPEAR WHENEVER THE PAGE RENDERED AND EACH TIME THE VALUE IS UPDATE**********
    
  // }) 


  //2. useEffect(()=>
  // {
  //   console.log("Entered"); **********THIS WILL APPEAR ONLY WHENEVER  THE PAGE IS RENDERED AND NOT APPEAR THE VALUE IS UPDATED **********
    
  // },[]) ********DEPENDENCY ARRAY*********

// useEffect(()=>
//   {
//     console.log("Value1 is UPDATED"); 
    
//   },[value1]) 


//   useEffect(()=>
//   {
//     console.log("Value2 is UPDATED"); 
    
//   },[value2]) 


//   useEffect(()=>
//   {
//     console.log("Value1 and Value2 is UPDATED"); 
    
//   },[value1,value2]) 





// const updateValue1=()=>
// {
// setValue1(value1+1)


// }

// const updateValue2=()=>
// {

// setValue2(value2+1)
// }

  return (
    <>
{/* <button onClick={updateValue1}>Update1</button>   
<button onClick={updateValue2}>Update2</button>                    
<p>{value1}</p>
<p>{value2}</p> */}


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


