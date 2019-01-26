import React from 'react';
import { userService } from '../_services';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      isLoggedIn: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('Handle Change for: ', name, value)
    this.setState({ 
      [name]: value, 
      submitted: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    console.log('Handle Submit for: ', username, password)

    const authenticated = this.fakeLogin(username, password); 
    console.log('Authenticated: ', authenticated)
    // this.setState({ isLoggedIn: authenticated });
    this.props.onLoginSubmit(authenticated);
  }

  fakeLogin(username, password) {
    return userService.login(username, password);
  };

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">     
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
              {submitted && !username &&
                <div className="help-block">
                  <small className="form-text text-muted">Username is required.</small>
                </div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">
                  <small className="form-text text-muted">Password is required.</small>
                </div>
              }
            </div>

            { !this.state.isLoggedIn && this.state.submitted &&
              <div className="alert alert-danger">Username or password is incorrect</div>
            } 

            <div className="form-group">
              <button className="btn btn-primary">Login</button>
            </div>

            <p>Demo combinations: <code>Hari</code> / <code>Seldon</code> and <code>Salvor</code> / <code>Hardin</code></p>
          </form>
        </div>
      </div>
    );
  }
}

export { LoginPage }; 