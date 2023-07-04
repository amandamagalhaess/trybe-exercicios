import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numberOfClicksOne: 0,
    numberOfClicksTwo: 0,
    numberOfClicksThree: 0,
  }

  getBtnColor = (num) => (num % 2 === 0 ? 'green' : 'white');

  handleBtnOne = () => {
    this.setState((prevState) => ({
      numberOfClicksOne: prevState.numberOfClicksOne + 1,
    }), () => (console.log(this.getBtnColor(this.state.numberOfClicksOne))));
  }
  handleBtnTwo = () => {
    this.setState((prevState) => ({
      numberOfClicksTwo: prevState.numberOfClicksTwo + 1,
    }), () => (console.log(this.getBtnColor(this.state.numberOfClicksTwo))));
  }
  handleBtnThree = () => {
    this.setState((prevState) => ({
      numberOfClicksThree: prevState.numberOfClicksThree + 1,
    }), () => (console.log(this.getBtnColor(this.state.numberOfClicksThree))));
  }
  render() {
    const { numberOfClicksOne, numberOfClicksTwo, numberOfClicksThree } = this.state
    return (
      <div>
        <button onClick={this.handleBtnOne} style={ {backgroundColor: this.getBtnColor(numberOfClicksOne)} }>{numberOfClicksOne}</button>
        <button onClick={this.handleBtnTwo} style={ {backgroundColor: this.getBtnColor(numberOfClicksTwo)} }>{numberOfClicksTwo}</button>
        <button onClick={this.handleBtnThree} style={ {backgroundColor: this.getBtnColor(numberOfClicksThree)} }>{numberOfClicksThree}</button>
      </div>
    )
  }
}

export default App;
