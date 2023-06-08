import React from 'react'

import {Routes ,Route , Navigate} from 'react-router-dom';

import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import ProductDetails from '../Pages/ProductDetails';
import Login  from '../Pages/Login';
import Signup  from '../Pages/Signup';



const Routers = () => {
  return <Routes>
    <Route path="/" element = {<Navigate to='/home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    

  </Routes>
}

export default Routers
