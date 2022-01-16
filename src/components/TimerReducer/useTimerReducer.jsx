import React from 'react'
import { useState, useEffect } from 'react'
import { useReducer } from 'react'
const START = 'START'
const STOP = 'STOP'
const RESET = 'RESET'
const TICK = 'TICK'
const reducer = (state, action) => {
  switch (action.type) {
    case START:
      return { ...state, isCounting: true }
    case STOP:
      return { ...state, isCounting: false }
    case RESET:
      return { ...state, isCounting: false, count: 0 }
    case TICK:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
export const useTimerReducer = props => {
  const [state, dispatch] = useReducer(reducer, { isCounting: false, count: setInitialValue() })
  useEffect(() => {
    let timerId = null
    if (state.isCounting) {
      timerId = setInterval(() => {
        dispatch({ type: TICK })
      }, 1000)
    }
    return () => {
      clearInterval(timerId) // timerIdRef.current && clearInterval(timerIdRef.current)
      timerId = null
    }
  }, [state.isCounting])
  useEffect(() => {
    localStorage.setItem('count', state.count)
  }, [state.count])
  return {
    state,
    dispatch
  }
}
function setInitialValue() {
  const value = localStorage.getItem('count')
  return value ? +value : 0
}