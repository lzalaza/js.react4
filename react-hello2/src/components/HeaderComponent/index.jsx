import React from 'react'
import './HeaderComponent.css'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'


const HeaderComponent = () => {

  const  CartItems = useSelector((state) => state.posts.cartItems)

  return (
    <header style={{position: 'sticky', top:0 , zIndex: 9}}>
    <nav className='headercomponent'>
      <div className='log'><img src="./logo192.png" width="90px"/></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      {CartItems?.length} items in cart
    </nav>
    </header>
  )
}

export default HeaderComponent;