import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import './CartComponent.css'
import { removeitemFromCart } from "../../Redux/postsSlice";

const CartComponent = ({postsLength}) =>{


 const cartItems = useSelector((state) => state.posts.cartItems)
 const dispatch = useDispatch();

 const removeItem = (id) =>{
   dispatch(removeitemFromCart(id))
 }

    return ( 
        <div>
         <div className='cart-items'>
        {
           cartItems.map((item, index) => ( 
            <div className='potscnt' key={index}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <button className='remove' onClick={()=> removeItem(item.id)}>Remove Item</button>
              </div>
           ))
        }
       </div> 
         </div>
    )
}
export default CartComponent;