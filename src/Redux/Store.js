import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../Counter/CounterSlice'
import postsReducer from '../Redux/PostsSlice'

export const Store = configureStore({
  reducer: {
    counterRed : CounterReducer,
    postsRed: postsReducer
  }
})