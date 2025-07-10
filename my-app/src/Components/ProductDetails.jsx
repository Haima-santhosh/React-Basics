import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductDetails = () => {



  const [mount, setMount] = useState(1)
  const [productDetails, setProductDetails] = useState({})

  const getProductDetails= async(id) =>
  {
    
    const result=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(result);
    setProductDetails(result.data)
    
  }

  useEffect(() => {
   if(mount){
   getProductDetails(mount)
   }

  }, [mount])


  return (
    <>
      <div
        className='h-full w-full border bg-slate-300 flex flex-col items-center '
      >
        <button
          className=" border-2 bg-red-400 border-red-700 rounded py-3 px-1 m-5 font-bold text-white uppercase "
          onClick={() => setMount(mount+1)}
        >
          Fetch Products Details{mount}
        </button>


    
      <div className="flex gap-5">
        <div className="w-1/2 border flex justify-center items-center">
          <div className="w-fit h-auto border rounded-xl shadow-xl">
        <img className="w-1/2 h-auto mx-auto" src={productDetails?.image} alt="" />
        </div>
        </div>

        <div className="w-1/2 border shadow-2xl p-5 flex flex-col gap-3">
<h2 className="text-3xl">{productDetails.title}</h2>
<p>{productDetails.description}</p>
<p>${productDetails.price}</p>
            <p>Rating : {productDetails.rating?.rate}</p>

        </div>
        
      </div>
        </div>
    </>
  );
};

export default ProductDetails;
