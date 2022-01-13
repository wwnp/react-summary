import React from 'react'
import { useLayoutEffect, useEffect, useState } from 'react'
// UseLayoutEffect like useEffect but it's sync; useEffect - async better
// difference: if use useEffect then you ll see some lags; if useLayoutEffect then there will be no lags
export const UseLayoutEffect = props => {
  const [value, setValue] = useState(0)
  useLayoutEffect(() => {
    if (value === 5) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])
  console.log('render', value)
  return (
    <div >
      UseLayoutEffect
      <button onClick={() => setValue(5)}>value: {value}</button>
    </div>
  )
}