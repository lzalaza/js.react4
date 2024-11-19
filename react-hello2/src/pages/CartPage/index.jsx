import React from "react";
import { useSelector } from 'react-redux'

export const CartPage = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)

    return(
        <div>CartPage</div>
    )
}