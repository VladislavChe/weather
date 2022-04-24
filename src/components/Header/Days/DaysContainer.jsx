import React from "react";
import { connect } from "react-redux";
import Days from "./Days";
import { getWeather } from "../../../redux/main-branch-reducer";

const DaysContainer = (props) => {
  return <Days {...props} />;
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  getWeather,
})(DaysContainer);
