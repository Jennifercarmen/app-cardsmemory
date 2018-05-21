import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import getCardsList from './Services/getCardsList';

class App extends Component {
  constructor() {
    super();
    this.state = { board: getCardsList() };
    };
  render() {
    
    const { board }=this.state;

    return (
      <div className="container">
        <Header />
        <Board board={board} />
      </div>
    );
  }
}

export default App;
