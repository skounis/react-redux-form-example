import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginPage } from './LoginPage';
import { SecretPage } from './SecretPage';
import { loginSuccessAction, loginFailureAction } from "./_redux/actions/loginAction";
import { logoutAction } from "./_redux/actions/logoutAction";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isSubmitted: false
    };
  }

  handleLogin(authenticated) {
    if(authenticated) {
      this.props.loginSuccessAction();
    } else {
      this.props.loginFailureAction();
    }
    this.setState({ 
      // isLoggedIn: authenticated,
      isSubmitted: true 
    });
  }

  handleLogout(authenticated) {
    this.props.logoutAction();
    this.setState({ 
      // isLoggedIn: false,
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
    console.log('Redux state: ', this.props);
    return (
      <div className="App jumbotron">
        <div className="container">
          {
            this.route(
              this.props.isLoggedIn,
              this.handleLogin,
              this.handleLogout
              )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginSuccessAction: () => dispatch(loginSuccessAction),
  loginFailureAction: () => dispatch(loginFailureAction),
  logoutAction: () => dispatch(logoutAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);