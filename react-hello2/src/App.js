import axios from 'axios';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ProductsComponent from './components/HeaderComponent/ProductsComponent';
import { useEffect, useState } from 'react';


function App() {
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
  <HeaderComponent postsLength={postsLenght}/>
  <ProductsComponent posts={posts} postsLength={postsLenght}  loading={loading} setPosts={setPosts} />
</div>
);
}

export default App;
