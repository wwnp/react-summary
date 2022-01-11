import React from "react";

export class TimerClass extends React.Component {
  state = {
    currentSecond: 0,
    isCounting: false
  };

  componentDidMount() {
    const secFromLS = localStorage.getItem("currSec");
    if (secFromLS) {
      this.setState({
        currentSecond: +secFromLS
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("currSec", this.state.currentSecond);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>React Timer</h2>
        {this.state.currentSecond}
        <br />
        {this.state.isCounting ? (
          <button onClick={() => this.stopHandler()}>Stop</button>
        ) : (
          <button onClick={() => this.startHandler()}>Start</button>
        )}

        <button onClick={() => this.resetHandler()}>Reset</button>
      </div>
    );
  }
  startHandler() {
    this.setState({
      isCounting: true
    });
    this.interval = setInterval(() => {
      // localStorage.setItem("currSec", this.state.currentSecond + 1);
      this.setState({
        currentSecond: this.state.currentSecond + 1
      });
    }, 1000);
  }
  stopHandler() {
    this.setState({
      isCounting: false
    });
    clearInterval(this.interval);
  }
  resetHandler() {
    // console.log(localStorage.getItem("currSec"));
    clearInterval(this.interval);
    this.setState({
      currentSecond: 0,
      isCounting: false
    });
  }
}
// Do not lose this:
// 1 binding in constructor *1
// 2 binding in onCLick (this.counterHandler.bind(this) ) *2
// 3 use () => this.counterHandler() *3
// 4 use arrow fn *4
