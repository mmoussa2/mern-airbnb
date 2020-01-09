import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session_forms.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email address"
          />

          <input
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"
            required
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Create a Password"
            required
          />

          <input
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
            required
          />

          <button onClick={this.handleSubmit}>Sign up</button>

          <div className="divider"></div>

          <span>
            <h4>Already have an account?</h4>
            <div className="fake-button">
              <Link to="login">Log in</Link>
            </div>
          </span>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);