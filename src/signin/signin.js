import './signin.css';
import Validation from '../validation/validation';
import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
  }

  validate(e) {
    e.preventDefault();
    let formIsValid = true;
    if(!this.state.fields['email']){
      this.state.errors['email'] = true;
      this.setState(this.state);
      formIsValid = false;
    }

    if(!this.state.fields['password']){
      this.state.errors['password'] = true;
      this.setState(this.state);
      formIsValid = false;
    }

    if(!formIsValid) return;
    // logic 

  }

  handleChange(field, e) {
    this.state.fields[field] = e.target.value;
  }

  render() {
    return (
      <main className="form-signin">
        <form
          onSubmit={this.validate.bind(this)}
        >
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input onChange={this.handleChange.bind(this, "email")} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
            <Validation state={this.state} field="email" message="Email is required" />
          </div>
          <div className="form-floating">
            <input type="password" onChange={this.handleChange.bind(this, "password")} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <Validation state={this.state} field="password" message="Password is required" />
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    )
  }
}

export default SignIn;