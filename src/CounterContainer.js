import React, { Component } from "react";

import Counter from "./Counter";

export default class CounterContainer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // this.handleIncrement = this.handleImcrement.bind(this)
  }

  // actually defines the function on the instance
  // arrow function binds it to the instance
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;
    return (
      <Counter
        count={count}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.reset}
      />
    );
  }
}
