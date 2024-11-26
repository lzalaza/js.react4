import React from 'react'
import './HeaderComponent.css'
import {Link} from 'react-router-dom';


const HeaderComponent = () => {
  return (
    <header>
    <nav className='headercomponent'>
      <div className='log'><img src="./logo192.png" width="90px"/></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      {/*<div className='all'>
        All Items: {postsLength}
      </div>*/}
    </nav>
    </header>
  )
}

export default HeaderComponent;