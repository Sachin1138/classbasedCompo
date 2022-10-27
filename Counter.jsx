import React, { Component } from "react";

class Counter extends Component {
  state = {
    cnt: 0
  };
  incrementCounter = () => {
    this.setState(
      prevState => {
        return {
          cnt: prevState.cnt + 1
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  decrementCounter = () => {
    if (this.state.cnt !== 0) {
      this.setState({ cnt: this.state.cnt - 1 });
    }
  };
  resetCounter = () => {
    this.setState({ cnt: 0 });
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", margin: "10px auto", width: "15%" }}>
          <button onClick={this.decrementCounter}>Decrement</button>
          <h4>{this.state.cnt}</h4>
          <button onClick={this.incrementCounter}>Increment</button>
        </div>
        <div>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
