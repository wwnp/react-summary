import { useState } from "react";
import { Clicker } from "../components/Clicker";
import { Timer } from "../components/Timer";
export const Home = (props) => {
  const [isClicker, setIsClicker] = useState(false);
  const [testCnt, setTestCnt] = useState(0);
  return (
    <div className="Home">
      {/* Clicker useEffect(mount, update,unmount) */}
      <hr />
      <div>
        <button onClick={(e) => setIsClicker(!isClicker)}>
          Toogle Clicker
        </button>
        {isClicker ? <Clicker></Clicker> : null}
      </div>

      {/* Timer (interval,timer,ref) */}
      {/* problem in CSB:localstorage */}
      <hr />
      {/* <div><Timer></Timer></div>  */}

      {/* Multiple add setTestCnt  */}
      <hr />
      <div>
        <button
          onClick={(e) => {
            setTestCnt((prevCount) => prevCount + 1);
            setTestCnt((prevCount) => prevCount + 1);
            setTestCnt((prevCount) => prevCount + 1);
            setTestCnt((prevCount) => prevCount + 1);
            setTestCnt((prevCount) => prevCount + 1);
            setTestCnt((prevCount) => prevCount + 1);
          }}
        >
          +
        </button>
        {testCnt}
      </div>
    </div>
  );
};
// useEffect === componentDidMount + componentDidUpdate + componetnWillUnmoount
