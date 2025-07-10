import React from 'react'
import {Link} from 'react-router-dom'

const Products = (props) => {
  return (
    <>
    <div className=''>
    <img src={props.product.image} alt="" className='productImage'/>
    <p className='productTitle'>{props.product.title}</p>
    <p className='productPrice'>Price:{props.product.price} /-</p>
   <Link to={`/product/${props.product.id}`}>
    <button>View Product</button>
   </Link>
    </div>
    </>
  )
}

export default Products