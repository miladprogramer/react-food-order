
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import AllFoods from './AllFoods';
import FoodDetail from './FoodDetail';
import CartPage from './CartPage';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />

      <Route path="/foods/:id" element={<FoodDetail />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* // <Route path="/cart" element={<Cart />} 
    // <Route path="/checkout" element={<Checkout />} />
    // <Route path="/login" element={<Login />} />
    // <Route path="/register" element={<Register />} />
    // <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}

export default Routers;