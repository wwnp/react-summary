import { useState, useEffect } from "react"
// useState (state, value, count)
export const UseState = props => {
  // --------------state----------------------------
  const [state, setState] = useState({
    counter: 0,
    isCounting: false
  })

  const addInState = () => {
    setState({ ...state, counter: state.counter + 1 })
  }
  const isCountingInState = () => {
    setState({ ...state, isCounting: !state.isCounting })
  }
  useEffect(() => {
    // console.log(state)
  }, [state]) // update

  // ^ like in stateful comps this.state = {...}

  //--------------count----------------------------
  const [count, setCount] = useState(() => {
    const userCount = localStorage.getItem('count')
    return +userCount || 0
  })

  const add = () => {
    setCount(count + 1)
    setCount(count + 1) // useless
    setCount(count + 1) // useless
    // 
    // setCount(prevState => prevState + 1)
    // setCount(prevState => prevState + 1)
    // setCount(prevState => prevState + 1)
    // setCount(prevState => prevState + 1)
  }
  //--------------value----------------------------
  const [value, setValue] = useState(0)


  return (
    <div >
      {/* --------------count---------------------------- */}
      <button className="btn grey" onClick={add}>add</button> <b>{count}</b>
      <hr />
      {/* --------------state---------------------------- */}
      <button
        className="btn blue"
        onClick={addInState}
      >
        addInState
      </button>

      <button
        className="btn blue"
        onClick={isCountingInState}
      >
        isCountingInState
      </button>
    </div>
  )
}