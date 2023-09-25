
import React from 'react'
import './Style.css'
import { Link } from "react-router-dom";
import { ListGroup } from 'reactstrap'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartUiActions } from '../Redux/cartUiSlice'
import CartItem from './CartItem'



const Cart = () => {
const dispatch=useDispatch()



const cartProducts = useSelector((state) => state.cart.cartItems);
const totalAmount=useSelector((state)=>state.cart.totalAmount)
  const toggleBasket=()=>{
    dispatch(cartUiActions.toggle())
  }
    return (
        <>
        <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleBasket}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <span  onClick={toggleBasket}>
              Checkout
            </span>
          </button>
        </div>
      </ListGroup>
    </div>
     
        </>
    )
}

export default Cart