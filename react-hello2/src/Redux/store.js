import { configureStore } from '@reduxjs/toolkit';
import postsReducter from './postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducter,
  }
});

export default store;