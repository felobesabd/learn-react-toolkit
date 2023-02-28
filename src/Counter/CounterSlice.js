import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  count : 10,
  name: 'felobes'
}

const CounterSlice = createSlice({
  name: 'Counter',
  initialState ,
  reducers: {
    increment: (state) => {
      state.count += 1
    },    
    decrement: (state) => {
      state.count -= 1
    },    
    setName: (state) => {
      state.name = 'Ebram'
    }, 
  } 
})

export const { increment, decrement, setName } = CounterSlice.actions;

export default CounterSlice.reducer;