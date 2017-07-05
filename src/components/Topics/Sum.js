import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      userInput1: 0,
      userInput2: 0,
      sum: null
    }
  }

  handleChange1(val) {
    this.setState({ userInput1: parseInt(val, 10) });
  }



  handleChange2(val) {
    this.setState({ userInput2: parseInt(val, 10) });
  }

  sumAll(a, b) {
    var total = a + b;
    this.setState({
      sum: total
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => {this.handleChange1(e.target.value)} }></input>
        <input className="inputLine" type="number" onChange={ (e) => {this.handleChange2(e.target.value)} }></input>
        <button className="confirmationButton" onClick={ () => {this.sumAll(this.state.userInput1, this.state.userInput2)} }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;
