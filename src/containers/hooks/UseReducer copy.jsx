import React, { useReducer } from "react";
// simple version of redux - state control system
// onlu one reducer, not middleware (dif from redux)
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;
const reducer = (state, { type, payload = step }) => {
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + payload)
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload)
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload)
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload)
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload)
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload)
      };
    default:
      return state;
  }
};
export function UseReducer() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });
  return (
    <div className="App">
      <h1
        style={{
          color: `rgb(${r}, ${g}, ${b})`
        }}
      >
        Hello CodeSandbox
      </h1>
      <div>
        <span>r </span>
        <button onClick={() => dispatch({ type: "INCREMENT_R", payload: 100 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
      </div>
      <div>
        <span>g </span>
        <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
      </div>
      <div>
        <span>b </span>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
      </div>
    </div>
  );
}
