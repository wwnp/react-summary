// import React, { useEffect, useRef, useState } from 'react'
import { LogicTimer } from './LogicTimer'
// Ref for focus, uncontrollabe inputs, intervals
// interval to ref timerIdRef.current = setInterval(() => {...} )
export const Timer = props => {
  const {
    count,
    isCounting,
    setIsCounting,
    handleReset
  } = LogicTimer()
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
