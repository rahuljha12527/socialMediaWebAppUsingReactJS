import React, { Component } from 'react';
import { signupStart, signup } from '../actions/auth';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      Confirm_Password: '',
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, Confirm_Password } = this.state;

    if (name && email && password && Confirm_Password) {
      this.props.dispatch(signupStart());
      this.props.dispatch(signup(name, email, password, Confirm_Password));
    }
  };
  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Signup</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm_Password"
            required
            onChange={(e) => this.handleInputChange('Confirm_Password', e.target.value)}
          />
        </div>

        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
