import React, { Component } from 'react';
import { LoginPage } from './LoginPage';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin(authenticated) {
    this.setState({ isLoggedIn: authenticated });
    console.log('Handle Login. Set isLoggedIn to: ', authenticated)
  }

  render() {
    return (
      <div className="App jumbotron">
        <div className="container">
          <LoginPage 
            isLoggedIn={this.state.isLoggedIn} 
            onLoginSubmit={this.handleLogin} />
        </div>
      </div>
    );
  }
}

export default App;
