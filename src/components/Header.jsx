import {React,useState} from 'react'
import { Container } from 'reactstrap'
import logo from '../images/tasty food (2).png'
import './Style.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartUiActions } from '../Redux/cartUiSlice'
import { Link } from 'react-router-dom'
const Header = () => {
  const dispatch=useDispatch()

  const quantity=useSelector((state) =>state.cart.totalQuantity)
  const [tabs,setTabs]=useState("home")

  const toggleBasket=()=>{
    dispatch(cartUiActions.toggle())
  }
  return (
   <>
  <Container>
    <div className='header  d-flex align-items-center justify-content-between'>
<div className='header-logo'><img src={logo}/></div>
<div className='menu d-flex mt-4 gap-5'>
  <span>
    <Link onClick={()=> setTabs("home")} className={`${tabs==="home" ? "tab-active" : ""}`} to="/">Home</Link></span>
  <span><Link onClick={()=> setTabs("foods")} className={`${tabs==="foods" ? "tab-active" : ""}`} to="/foods">Foods</Link></span>
  <span><Link onClick={()=> setTabs("cart")} className={`${tabs==="cart" ? "tab-active" : ""}`} to="/cartpage">Cart</Link></span>
  <span><Link onClick={()=> setTabs("contact")} className={`${tabs==="contact" ? "tab-active" : ""}`} to="/cartpage">Contact</Link></span>
</div>
<div className='menu-icons d-flex mt-4 gap-4'>
  <span className='basket'>
    <span className='basket-badge'>{quantity}</span>
  <i className="ri-shopping-basket-line" onClick={toggleBasket}></i>
  </span>
<Link to="/login">
  <i className="ri-user-line"></i>
</Link>

</div>
    </div>
  </Container>
   </>
  )
}

export default Header