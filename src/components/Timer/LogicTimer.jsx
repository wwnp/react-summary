import React, { useEffect, useRef, useState } from 'react'
// useState useEffect
export const LogicTimer = props => {
  const [count, setCount] = useState(setInitialValue())
  const [isCounting, setIsCounting] = useState(false)
  const timerIdRef = useRef(null)

  const handleReset = () => {
    setCount(0)
    setIsCounting(false)
  }

  useEffect(() => {
    isCounting
      ?
      timerIdRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000) :
      null
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current)
      timerIdRef.current ?
        timerIdRef.current = null :
        null
    }
  }, [isCounting]) // mount and unmount

  useEffect(() => {
    localStorage.setItem('counter', count)
  }, [count]) // update

  return {
    count,
    isCounting,
    setIsCounting,
    handleReset
  }
}

function setInitialValue() {
  const counter = localStorage.getItem('counter')
  return counter ? +counter : 0
}
// useEffect === componentDidMount + componentDidUpdate + componetnWillUnmoount