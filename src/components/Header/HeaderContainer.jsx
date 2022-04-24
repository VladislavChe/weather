import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/auth-redicer";

const HeaderContainer = (props) => {
  // props.getAuthUserData();
  return <Header {...props} />;
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
