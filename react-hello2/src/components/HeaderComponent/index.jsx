import React from 'react'
import './HeaderComponent.css'



const HeaderComponent = ({postsLength}) => {
  return (
    <div className='headercomponent'>
      <div className='log'>LOGO</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className='all'>
        All Items: {postsLength}
      </div>
    </div>
  )
}

export default HeaderComponent