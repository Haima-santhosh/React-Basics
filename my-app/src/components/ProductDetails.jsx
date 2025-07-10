
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  let {id}=useParams()
  console.log(id);
  

  
  const[product,setProduct]=useState({})


  useEffect(()=>
  {
  
  axios.get(`https://fakestoreapi.com/products/${id}`).
  then(res=>setProduct(res.data));
 
  
  
  },[])

  return (
    <>

    <h1>ProductDetails</h1>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.price}</p>
    </>
  )
}

export default ProductDetails