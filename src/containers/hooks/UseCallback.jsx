import React, { useCallback } from 'react'
import { useState } from 'react'
// useCallback; return fn ; Don't use render two an more times for complicated calculationg
// нужен чтобы все не перерендерить, а только то, что нужно
// useMemo like useCallback but dif: return value ,not fn
// for caclulation factorial for example
const CountBtn = React.memo(({ onClick, count }) => {
  console.log('render', count)
  return <button onClick={onClick}>{count}</button>
})
export function UseCallback() {
  const [count1, setCount1] = useState(0)
  const inc1 = useCallback(() => setCount1(prevCount => prevCount + 1), [])

  const [count2, setCount2] = useState(0)
  const inc2 = useCallback(() => setCount2(prevCount => prevCount + 1), [])
  return (
    <>
      <CountBtn count={count1} onClick={inc1}></CountBtn>
      <CountBtn count={count2} onClick={inc2}></CountBtn>
    </>
  )
}