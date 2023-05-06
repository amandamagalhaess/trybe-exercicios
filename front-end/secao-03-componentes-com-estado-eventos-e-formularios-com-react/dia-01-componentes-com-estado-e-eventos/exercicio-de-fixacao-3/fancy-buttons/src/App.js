import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numberOfClicksOne: 0,
    numberOfClicksTwo: 0,
    numberOfClicksThree: 0,
  }

  handleBtnOne = () => {
    this.setState((prevState) => ({
      numberOfClicksOne: prevState.numberOfClicksOne + 1,
    }));
  }
  handleBtnTwo = () => {
    this.setState((prevState) => ({
      numberOfClicksTwo: prevState.numberOfClicksTwo + 1,
    }));
  }
  handleBtnThree = () => {
    this.setState((prevState) => ({
      numberOfClicksThree: prevState.numberOfClicksThree + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleBtnOne}>{this.state.numberOfClicksOne}</button>
        <button onClick={this.handleBtnTwo}>{this.state.numberOfClicksTwo}</button>
        <button onClick={this.handleBtnThree}>{this.state.numberOfClicksThree}</button>
      </div>
    )
  }
}

export default App;
