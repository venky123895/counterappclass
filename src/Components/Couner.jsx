import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  handleResest = () =>{
    this.setState({count:0})
  }

  render() {
    const { count } = this.state;

    return (
      <div className='counter'>
        <h1 className='header'>Counter App</h1>
        <p className='count'>Count: {count}</p>
        <button className='but' onClick={this.handleIncrement}>Increment</button>
        <button className='but' onClick={this.handleDecrement}>Decrement</button>
        <button className='but' onClick={this.handleResest}>Reset</button>
      </div>
    );
  }
}

export default Counter;