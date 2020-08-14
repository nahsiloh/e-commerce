import React from "react";
import FormInput from "../FormInput/FormInput";

import "./Login.styles.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setstate({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        {/* <FormInput handleChange={this.handleChange} label, ...props /> */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          ></FormInput>
          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    );
  }
}

export default Login;
