import React, { Component } from 'react';
import { LoginPage } from './LoginPage';
import { SecretPage } from './SecretPage';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false,
      isSubmitted: false
    };
  }

  handleLogin(authenticated) {
    this.setState({ 
      isLoggedIn: authenticated,
      isSubmitted: true 
    });
  }

  handleLogout(authenticated) {
    this.setState({ 
      isLoggedIn: false,
      isSubmitted: false 
    });
  }

  route(isLoggedIn, loginHandler, logoutHandler) {
    let page = <LoginPage 
      isLoggedIn={isLoggedIn} 
      onLoginSubmit={loginHandler} />;

    if (isLoggedIn) {
      page = <SecretPage 
        onLogout={logoutHandler}/>;
    }

    return page;

  }
  render() {
    return (
      <div className="App jumbotron">
        <div className="container">
          {
            this.route(
              this.state.isLoggedIn,
              this.handleLogin,
              this.handleLogout
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
