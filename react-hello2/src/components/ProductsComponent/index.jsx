import React from 'react';
import CartComponent from '../CartComponent';
import './ProductsComponent.css';
import { MoonLoader } from 'react-spinners';
import { useSelector } from 'react-redux';



const ProductsComponent = ({posts, postsLength, loading, setPosts}) => {
    
  const removePost = (id) =>{
    setPosts(prevPost => prevPost.filter(item => item.id !== id))
  }
 
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
                <button className='remove'  onClick={()=>removePost(post.id)}>Remove Item</button>
              </div>
           ))
        }
       </div>}
       <CartComponent postsLength={postsLength} />
    </div>
  )
}
  


  


export default ProductsComponent;