
import React from 'react'
import bread from '../images/bread.png'
import './Style.css'
const Foods = (props) => {
    const {id,title,price,image01}=props.item
  return (
    <>
    <div className='product'>
<div className='product-content'>
    <img src={image01}/>
    <h6>{title}</h6>
    <div className='addToCart'>
        <span>${price}</span>
        <button>Add to Cart</button>
    </div>
</div>
    </div>
    </>
  )
}

export default Foods