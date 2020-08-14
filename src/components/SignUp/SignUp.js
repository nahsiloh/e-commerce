import React from "react";

import "./SignUp.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return <div className="sign-up"></div>;
  }
}

export default SignUp;
