import { configureStore } from '@reduxjs/toolkit';



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
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

    },

});

export const { setPosts, addPosts, removePosts } = postsSlice.action;
export default postsSlice.reducer;