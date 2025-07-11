import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetails } from '../api/products'


const ProductDetailPage = () => {

    const[ProductDetails,setProductDetails] =useState(null)

    const {id} =useParams()
    console.log(id);

    useEffect(() => {

        fetchProductDetails(id).then((data)=>{
 setProductDetails(data)
        })
       
     
    }, [id])//initially id may be null

    console.log(ProductDetails);

    if(!ProductDetails)
    {
        return(
            <div className='flex justify-center items-center w-full h-screen text-4xl'>

                Loading..........

            </div>
        )
    }
    
    
   

  return (
    <div className='w-full min-h-screen bg-red-100 py-20'>
        <div className='flex justify-center items-center gap-4 h-full p-5'>
            <div className='w-1/2 flex justify-center items-center bg-white shadow-2xl border rounded'>
                <img className='w-1/2 ' src={ProductDetails.image} alt={ProductDetails.title} />
            </div>
            <div className='w-1/2 bg-white h-full flex flex-col justify around p-5'>
            <p className='text-xl text-red-950'>{ProductDetails.title}</p>
            <p>{ProductDetails.description}</p>
            <p>Price :{ProductDetails.price}</p>
            <p>Rating : {ProductDetails.rating.rate}</p>


            </div>

        </div>


    </div>
  )
}

export default ProductDetailPage