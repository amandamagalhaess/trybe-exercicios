import React from 'react';
import './App.css';

class App extends React.Component {
  handleBtnOne = () => {
    console.log('Botão 1 clicado!');
    console.log(this);
  }
  handleBtnTwo = () => {
    console.log('Botão 2 clicado!');
    console.log(this);
  }
  handleBtnThree = () => {
    console.log('Botão 3 clicado!');
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleBtnOne}>Botão 1</button>
        <button onClick={this.handleBtnTwo}>Botão 2</button>
        <button onClick={this.handleBtnThree}>Botão 3</button>
      </div>
    )
  }
}

export default App;
