
import React from 'react'
import { Table } from 'reactstrap'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/CartSlice'
import { Link } from 'react-router-dom'
import './Style.css'
const CartPage = () => {

    const cartItemList=useSelector((state)=>state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const { id, image01, title, price, quantity } =cartItemList;
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
      };
   
  return (
    <>
    < div className='background-title'>

<h2>Your Cart</h2>
</div>

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

<div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
    </>
  )
}

export default CartPage