import React from 'react'
import { useState } from 'react'
import { useRef, useEffect } from 'react'
export const UseCustomHook = props => {
  const [count, setCount] = useLocalStorage(0, 'count')
  const prevCount = usePrevious(count)
  return (
    <div >
      UseCustomHook
      <p onClick={() => setCount(count + 1)}>current: {count}</p>
      <p>prevCount: {prevCount}</p>
    </div>
  )
}

function usePrevious(value) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function useLocalStorage(initialState, key) {
  const get = () => {
    const storage = localStorage.getItem(key)
    return storage ? +storage : initialState
  }
  const [value, setValue] = useState(get)
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])
  return [value, setValue]
}