import React, { Component } from 'react';
import { LoginPage } from './LoginPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App jumbotron">
        <div className="container">
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
