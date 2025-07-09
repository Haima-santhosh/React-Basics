import React from 'react'

const Products = (props) => {
  return (
    <>
    <div className='productItem'>
    <img src={props.product.image} alt="" className='productImage'/>
    <p className='productTitle'>{props.product.title}</p>
    <p className='productPrice'>Price:{props.product.price} /-</p>
    </div>
    </>
  )
}

export default Products