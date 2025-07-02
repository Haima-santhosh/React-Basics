import { useState } from "react"
import "./assets/css/App.css"

function App() {

  const[products,setProducts]=useState([

{
 title:"Headset-1" ,
 image:"https://hk-media.apjonlinecdn.com/catalog/product/5/3/53L34AA_UUF-1_T1678886510.png",
 price:"1500/-"
},

{
 title:"Headset-2" ,
 image:"https://hk-media.apjonlinecdn.com/catalog/product/5/3/53L34AA_UUF-1_T1678886510.png",
 price:"2000/-"
},

{
 title:"Headset-3" ,
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHWYvFuVHE5IG09eyoNGE7S3lXsb5CEGyJw&s",
 price:"1000/-"
},

{
 title:"Headset-4" ,
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lybS1fYZpyU1gnbQiooeekMtsJkWEbGFQQ&s",
 price:"2500/-"
}






  ]

  )
  

  return (
    <>
      
      <h1>Products</h1>
      <div className="productsContainer">
        {products.map((products,index)=>{
          return(

              <div className="productItem">
     
        <img src={products.image} alt={products.title} className="productImage"  />
        <p className="productTitle">{products.title}</p>
        <p className="productPrice">Price : {products.price}</p>
      </div>

   )
        })}
      


      </div>


       

      
    </>
  )
}

export default App


