import React, { useEffect, useRef, useState } from 'react'
// Ref for focus, uncontrollabe inputs, intervals
// interval to ref timerIdRef.current = setInterval(() => {...} )
function setInitialValue() {
  const counter = localStorage.getItem('counter')
  return counter ? +counter : 0
}
export const Timer = props => {
  const [count, setCount] = useState(setInitialValue())
  const [isCounting, setIsCounting] = useState(false)
  const timerIdRef = useRef(null)

  const handleReset = () => {
    // localStorage.setItem('counter', 0)
    setCount(0)
    setIsCounting(false)
  }

  useEffect(() => {
    isCounting
      ?
      timerIdRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000)
      : null
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current)
      timerIdRef.current
        ? timerIdRef.current = null
        : null
    }
  }, [isCounting]) // mount and unmount

  useEffect(() => {
    localStorage.setItem('counter', count)
  }, [count]) // update

  return (
    <div >
      <h1>Timer</h1>
      <br />
      <h3>{count}</h3>
      {
        isCounting === false
          ? <button onClick={() => setIsCounting(true)}>Start</button>
          : <button onClick={() => setIsCounting(false)}>Stop</button>
      }
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}