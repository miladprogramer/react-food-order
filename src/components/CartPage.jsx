
import React from 'react'
import { Table } from 'reactstrap'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/CartSlice'
import { Link } from 'react-router-dom'
import './Style.css'
const CartPage = () => {
    const dispatch = useDispatch();
    const cartItemList=useSelector((state)=>state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const { id, image01, title, price, quantity } =cartItemList;
 
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
      };
   
  return (
    <>
    < div className='background-title'>

<h2>Your Cart</h2>
</div>
{
    cartItemList.length>0 ? (
        <>
        <div className='table mt-5 w-75 text-center m-auto'>
<Table bordered  hoer responsive>
  <thead>
    <tr>
      <th>
        Image
      </th>
      <th>
        Product Title
      </th>
      <th>
      Price
      </th>
      <th>
       Quantity
      </th>
      <th>
Delete
      </th>
     
    </tr>
  </thead>
  <tbody>
    {
        cartItemList.map((item)=>(
            <tr key={item.id}>
            <th scope="row">
            <img src={item.image01} className='img-cartpage'/>
            </th>
            <td>
             {item.title}
            </td>
            <td>
              ${item.price}
            </td>
            <td>
              {item.quantity}
            </td>
            <td>
            <i onClick={deleteItem} className="ri-delete-bin-5-line"></i>
            </td>
          </tr>
        ))
    }
 
  
 
  </tbody>
</Table>
</div>
<div className="cartpage-subtotal mt-4 mb-4 m-auto w-75" >
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn d-flex">
                  <button className="addToCart me-3">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
        </>

    ) :<h5 className='mt-5 mb-5 border text-center fw-bold p-4'>There is no item in your cart.</h5>
}



    </>
  )
}

export default CartPage