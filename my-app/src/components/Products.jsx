import React from 'react'

const Products = (props) => {
  return (
    <>
    <div className=''>
    <img src={props.product.image} alt="" className='productImage'/>
    <p className='productTitle'>{props.product.title}</p>
    <p className='productPrice'>Price:{props.product.price} /-</p>
    <button>View Product</button>
    </div>
    </>
  )
}

export default Products