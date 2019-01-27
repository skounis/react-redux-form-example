import React from 'react';

class SecretPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('Loging out ...');
    this.props.onLogout();
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Welcome</h2>
          <p>Welconme <code>{this.props.user.username}</code>. You have unlocked a secret page.</p>
          <div className="form-group">
            <button 
              onClick={this.handleLogout}
              className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export { SecretPage }; 