import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        cartItems: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        addPosts: (state, action) => {
            state.posts.push (action.payload);
        },
        removePosts: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        setLoading: (state, action) =>{
            state.loading = action.payload
        },
       addCartItem: (state, action) =>{
        state.cartItem.push(action.payload)
       }

    },

});

export const { setPosts, addPosts, removePosts, addCartItem } = postsSlice.action;

export default postsSlice.reducer;