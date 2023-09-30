
import React from 'react'
import bread from '../images/bread.png'
import './Style.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/CartSlice'

const Foods = (props) => {

  const dispatch=useDispatch()

  const addToCart=()=>{

    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price,
    }))
  }


    const {id,title,price,image01}=props.item
  return (
    <>
    
    <div className='product'>
<div className='product-content'>
    <img src={image01}/>
    <h5>
       <Link to={`/foods/${id}`}>{title}</Link>
    </h5>
   
    <div className='addToCart'>
        <span>${price}</span>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
</div>
    </div>
    </>
  )
}

export default Foods