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

  render() {
    return (
      <div className="App jumbotron">
        <div className="container">
          {!this.state.isLoggedIn && this.state.isSubmitted &&
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="alert alert-danger">Username or password is incorrect</div>
              </div>
            </div>
          }
          {!this.state.isLoggedIn &&
            <LoginPage 
              isLoggedIn={this.state.isLoggedIn} 
              onLoginSubmit={this.handleLogin} />
          }
          {this.state.isLoggedIn &&
            <SecretPage 
            onLogout={this.handleLogout}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
