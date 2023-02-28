import {createSlice} from '@reduxjs/toolkit'
import getAllPosts from './../Api/AxiosPosts';

const initialState = {
  posts: [],
  isLoading: false,
  error:null
}

const postsSlice = createSlice({
  name: 'POSTS',
  initialState ,
  reducers: {
  },
  extraReducers: {
    [getAllPosts.pending] : (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllPosts.fulfilled] : (state, action) => {
      state.posts = action.payload
      state.isLoading = false;
      state.error = null;
    },
    [getAllPosts.rejected] : (state, action) => {
      state.isLoading = false;
      state.error = action.error && action.error.message ? action.error.message : '';
    }
  }
})

// export const { getAllPosts } = postsSlice.actions;

export default postsSlice.reducer;