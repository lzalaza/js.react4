import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsComponent from '../../components/ProductsComponent';


export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [postsLenght, setPostsLngth] = useState(0);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      setPosts(response.data)
      setLoading(false)
    })    
    
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })

  
},[])


useEffect(()=>{
  setPostsLngth(posts.length)
}, [posts] )

return (
  <div className="App">
  <ProductsComponent posts={posts} postsLength={postsLenght}  loading={loading} setPosts={setPosts} />
</div>
);
}

export default HomePage;

