import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const getAllPosts = createAsyncThunk('get/posts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
})

export default getAllPosts;