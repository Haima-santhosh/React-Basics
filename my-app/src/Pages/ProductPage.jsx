import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import { Link } from 'react-router-dom'





const ProductPage = () => {
    const[products,setProducts]=useState([])

   

    useEffect(() => {

        (async()=>
        {
            const result = await fetchProducts()
          setProducts(result)
        })() // Anonymous function invoke


        
//             fetchProductDetails().then((result)=>
//             {
//   setProducts(result)
//             })
        
       


    }, [])

    console.log({products});
    if(products.length===0)
    return(
 <div className='w-full h-screen flex justify-center items-center text-5xl'>
            Loading..........
        </div>)
       
    
    

    return (

        <div className='w-full min-h-screen bg-slate-400 p-16 flex gap-4 flex-wrap justify-center'>
            
           { products.map((item)=>
            (
            <Link to={`/products/${item.id}`} key={item.id} className='border w-[18rem] my-3 h-auto flex flex-col gap-2 overflow-hidden p-2 bg-white shadow-lg rounded-lg'>
                <img className='w-full h-auto' src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
               
                <p>{item.rating?.rate}</p>
                <p>Price:${item.price}</p>

            </Link>
            ))}

        </div>
    )
}

export default ProductPage