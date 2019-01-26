import React from 'react';

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
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    console.log('Handle Submit for: ', username, password)
  }

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
                  <small class="form-text text-muted">Username is required.</small>
                </div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">
                  <small class="form-text text-muted">Password is required.</small>
                </div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { LoginPage }; 