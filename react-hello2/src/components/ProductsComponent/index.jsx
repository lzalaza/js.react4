import React, { useState } from 'react';
import CartComponent from '../CartComponent';
import './ProductsComponent.css';
import { MoonLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import EmptyHeart from '../../assests/images/heartempty.png';
import FilledHeart from '../../assests/images/heartfilled.png';
import { addCartItem } from '../../Redux/postsSlice';

const ProductsComponent = ({ postsLength, loading, setPosts}) => {
  const [addedToCartList, setAddedToCartList] = useState([]);
  const posts = useSelector((state) => state.posts.posts);
  const cartItems = useSelector((state)=> state.posts.cartItems)
  const dispatch = useDispatch();


  const removePost = (id) =>{
    setPosts(prevPost => prevPost.filter(item => item.id !== id))
  }
  
  const toggleAddedToCart = (index, post) =>{
    dispatch(addCartItem(post))
    setAddedToCartList([...addedToCartList, index])
  }

  console.log([addedToCartList, 'test'])
 
  return (
    <div className='productscompo'>
      {
        loading ?
        <>
         <div className='loading'><MoonLoader size={200}/></div>
         </>:
      <div className='products'>
        {
           posts.map((post, index) => ( 
            <div className='potscnt' key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                
                <div className='addToCartIcons' onClick={()=>toggleAddedToCart(index, post)}>
                  {
                    addedToCartList.includes(index) ? 
                    <img src={FilledHeart}/> :
                    <img src={EmptyHeart}/>
                  }
                </div>
              </div>
           ))
        }
       </div>}
       <CartComponent postsLength={postsLength} />
    </div>
  )
}
  


  


export default ProductsComponent;