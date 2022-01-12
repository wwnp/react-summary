import React, { useEffect } from 'react'
import { useState } from 'react'
// import somePlugin from 'plugin'
export const UseEffect = props => {
  const [count, setCount] = useState(0)

  // -----------mount---------------
  // [what effect do]
  useEffect(() => {
    // somePlugin.init()
    return () => {
      // somePlugin.destroy()
    }
  }, [])
  // or
  useEffect(function someFn() {
    // somePlugin.init()
    return () => {
      // somePlugin.destroy()
    }
  }, [])

  // async
  useEffect(() => {
    async function asyFn() {
      // const response = await fetch('...')
      // const {data} = response
    }
    asyFn();
  }, []);


  // document.addEventListener
  useEffect(() => {
    const handler = (e) => {
      console.log(e.target)
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  // -----------update---------------
  useEffect(() => {
  }, [count])



  return (
    <div >
      useEffect
    </div>
  )
}