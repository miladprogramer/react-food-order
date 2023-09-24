
import React from 'react'
import './Style.css'
import product_01 from '../images/product_01.jpg'
import { ListGroupItem } from 'reactstrap'
const Cart = () => {
    return (
        <>
           <ListGroupItem className="border-0 cart__item">
            <div className='cart-content'>
                <div className='content-close-btn mb-3 p-3'>
                 <i class="ri-close-line"></i>   
                </div>
            
      <div className="cart__item-info d-flex gap-2 p-3">
        <img src={product_01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">Pizza</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              x <span>$120</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" >
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">2</span>
              <span className="decrease__btn" >
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" >
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
      <div className='checkout d-flex align-items-center justify-content-between'>
        <div>
            <span>Subtotal: <span className='price-bold'>$120</span></span>
        </div>
        <button>Checkout</button>
      </div>
      </div>
    </ListGroupItem>
        </>
    )
}

export default Cart