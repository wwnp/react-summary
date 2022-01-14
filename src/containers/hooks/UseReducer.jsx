import React from 'react'
import { useReducer } from 'react'
// simple version of redux - state control system
// onlu one reducer, not middleware (dif from redux)
const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
export const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div >
      {state.count}
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
    </div>
  )
}

// const limitRBG = (num) =>
//   num < 0
//     ? 0
//     : num
//       > 255
//       ? 255
//       : num
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INC_R':
//       return { ...state, r: limitRBG(state.r + action.payload) }
//     case 'INC_G':
//       return { ...state, g: limitRBG(state.g + action.payload) }
//     case 'INC_B':
//       return { ...state, b: limitRBG(state.b + action.payload) }
//     case 'DEC_R':
//       return { ...state, r: limitRBG(state.r - action.payload) }
//     case 'DEC_G':
//       return { ...state, g: limitRBG(state.g - action.payload) }
//     case 'DEC_B':
//       return { ...state, b: limitRBG(state.b - action.payload) }
//     default:
//       return state
//   }
// }
// export const UseReducer = props => {
//   const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 150, g: 250, b: 150 })
//   return (
//     <div>
//       <h1 style={{
//         color: `rgb(${r},${g},${b})`
//       }}>HELLOW</h1>
//       <button onClick={e => dispatch({ type: 'INC_R', payload: 100 })}>R+</button>
//       <button onClick={e => dispatch({ type: 'INC_G', payload: 100 })}>G+</button>
//       <button onClick={e => dispatch({ type: 'INC_B', payload: 100 })}>B+</button>
//       <button onClick={e => dispatch({ type: 'DEC_R', payload: 100 })}>R-</button>
//       <button onClick={e => dispatch({ type: 'DEC_G', payload: 100 })}>G-</button>
//       <button onClick={e => dispatch({ type: 'DEC_B', payload: 100 })}>B-</button>
//     </div>
//   )
// }
