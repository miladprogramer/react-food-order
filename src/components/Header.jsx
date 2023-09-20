import React from 'react'
import { Container } from 'reactstrap'
import logo from '../images/tasty food (2).png'
import './Style.css'
const Header = () => {
  return (
   <>
  <Container>
    <div className='header  d-flex align-items-center justify-content-between'>
<div className='header-logo'><img src={logo}/></div>
<div className='menu d-flex mt-4 gap-5'>
  <span>Home</span><span>Foods</span><span>Cart</span><span>Contact</span>
</div>
<div className='menu-icons d-flex mt-4 gap-4'>
<i class="ri-shopping-basket-line"></i>
<i class="ri-user-line"></i>
</div>
    </div>
  </Container>
   </>
  )
}

export default Header