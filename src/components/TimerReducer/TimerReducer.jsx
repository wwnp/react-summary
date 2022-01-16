import React from 'react'
import { useTimerReducer } from './useTimerReducer'
export const TimerReducer = props => {
  const {
    state,
    dispatch,
  } = useTimerReducer()
  return (
    <div >
      <h1>TimerReducer</h1>
      {state.count}
      <br />
      {state.isCounting
        ? <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
        : <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      }
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}