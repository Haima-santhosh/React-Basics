import React, { useEffect, useState } from "react";

const Components = () => {



  const [mount, setMount] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
   if(mount)
   {
     fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setProducts(json)
      }
      )
   }

  }, [mount])


  return (
    <>
      <div
        className='h-full w-full border bg-slate-300 flex flex-col items-center '
      >
        <button
          className=" border-2 bg-red-400 border-red-700 rounded py-3 px-1 m-5 font-bold text-white uppercase "
          onClick={() => setMount(true)}
        >
          Fetch Products
        </button>


    
      <div className="flex flex-wrap">
        {products?.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-lg w-[15rem] h-[20rem] overflow-hidden border-r-gray-500 mx-auto">
            <img className="w-100 h-[10rem] object-contain p-3 flex justify-center items-center mx-auto" src={item.image} alt={item.title} />
           <div className="p-4">
             <h3 className="text-lg font-bold">{item.title}</h3>
            {/* <p>{item.description}</p> */}
            <p>${item.price}</p>
            <p>Rating : {item.rating.rate}</p>
           </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
};

export default Components;
