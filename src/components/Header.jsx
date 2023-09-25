import React from 'react'
import { Container } from 'reactstrap'
import logo from '../images/tasty food (2).png'
import './Style.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartUiActions } from '../Redux/cartUiSlice'
const Header = () => {
  const dispatch=useDispatch()

  const quantity=useSelector((state) =>state.cart.totalQuantity)

  const toggleBasket=()=>{
    dispatch(cartUiActions.toggle())
  }
  return (
   <>
  <Container>
    <div className='header  d-flex align-items-center justify-content-between'>
<div className='header-logo'><img src={logo}/></div>
<div className='menu d-flex mt-4 gap-5'>
  <span>Home</span><span>Foods</span><span>Cart</span><span>Contact</span>
</div>
<div className='menu-icons d-flex mt-4 gap-4'>
  <span className='basket'>
    <span className='basket-badge'>{quantity}</span>
  <i class="ri-shopping-basket-line" onClick={toggleBasket}></i>
  </span>

<i class="ri-user-line"></i>
</div>
    </div>
  </Container>
   </>
  )
}

export default Header