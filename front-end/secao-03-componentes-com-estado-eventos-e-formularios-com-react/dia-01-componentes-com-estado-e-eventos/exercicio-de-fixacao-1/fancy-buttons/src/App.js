import React from 'react';
import './App.css';

function handleBtnOne() {
  console.log('Botão 1 clicado!');
}

function handleBtnTwo() {
  console.log('Botão 2 clicado!');
}

function handleBtnThree() {
  console.log('Botão 3 clicado!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleBtnOne}>Botão 1</button>
        <button onClick={handleBtnTwo}>Botão 2</button>
        <button onClick={handleBtnThree}>Botão 3</button>
      </div>
    )
  }
}

export default App;
