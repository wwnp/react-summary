import React, { useState, useEffect } from 'react'
export const Clicker = props => {
  const [count, setCount] = useState(0)
  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }
  useEffect(() => {
    console.log('Clicker:: useEffect Mount')
  }, []) // componentDidMount (mount); 1 time
  useEffect(() => {
    console.log('Clicker:: useEffect Update')
    return () => {
      console.log('Clicker:: useEffect Unmount')
    } // componentWillUnmount (update and unmount); 1 time
  }, [count]) // componentDidUpdate (update) ; Several times
  return ( 
    <div >
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
    </div>
  )
}