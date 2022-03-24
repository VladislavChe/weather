import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-redicer";

class LoginContainer extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.isAuth) {
      return <Navigate to={"/main"} />;
    }

    return <Login {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
