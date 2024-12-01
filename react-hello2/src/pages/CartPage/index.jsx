import React from "react";
import { useSelector } from 'react-redux'
import CartComponent from '../../components/CartComponent';

export const CartPage = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)

    return(
        <div>
            <CartComponent/>
        </div>
    )
}

export default CartPage;