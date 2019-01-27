import React from 'react';
import { Field, reduxForm } from 'redux-form'


let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">Full name</label>
        <Field name="fullname" component="input" type="text" className="form-control"/>           
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <Field name="age" component="input" type="number" className="form-control"/>
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
    )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)


class SecretPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('Loging out ...');
    this.props.onLogout();
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('Secret Page, handle change:', name, value);
  }

  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Welcome</h2>
          <p>Welconme <code>{this.props.user.username}</code>. You have unlocked a secret page.</p>
          <p>It's now time to introduce yourself:</p>
          {/* <form name="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full name</label>
              <input type="text" className="form-control" name="fullname" onChange={this.handleChange} />              
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" name="age" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form> */}
          <ContactForm onSubmit={this.submit} />
          <div className="form-group">
            <p>Do not forget to  
            <button 
              type="button"
              onClick={this.handleLogout}
              className="btn btn-link pt-0 pb-1">logout</button> 
              and keep this page secret.
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export { SecretPage }; 