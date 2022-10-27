import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10
    };
  }
  render() {
    const { message, getData } = this.props;
    return (
      <div>
        <h1>Home Component</h1>
        <h2>{message}</h2>
        <button onClick={() => getData("Hey! I am Home component")}>
          Send Data
        </button>
      </div>
    );
  }
}

export default Home;
