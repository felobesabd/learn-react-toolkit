import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setName } from './CounterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counterRed.count)
  const [nameVal, setNameVal] = useState('')

  const onIncrement = ()=> {
    dispatch(increment())
  }
  const onDecrement = ()=> {
    dispatch(decrement())
  }  
  const onSetName = ()=> {
    dispatch(setName())
  }
  const changeName = (e)=> {
    setNameVal(e.target.value)
  }

  return (
    <div>
    <button onClick={onIncrement}>+</button>
    <button>{count}</button>
    <button onClick={onDecrement}>-</button>
    <div>
    <input type='text' onChange={changeName} value={nameVal}/>
    <span>{`Hello ${nameVal}`}</span>
    </div>
    </div>
  )
}

export default Counter