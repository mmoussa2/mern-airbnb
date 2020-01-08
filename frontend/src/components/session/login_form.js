import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session_forms.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/'); 
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              required
            />
        
            <input type="name"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"
              required
            />
        
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              required
            />
        
            
            <button onClick={this.handleSubmit}>Log in</button>

            <div className="divider"></div>

            <span>
              <h4>Don't have an account?</h4>
              <div className="fake-button">
                <Link to="/signup">Sign up</Link>
              </div>
            </span>

            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);