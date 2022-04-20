import React from "react";
import Location from "./Location";
import { connect } from "react-redux";
import {
  getWeather,
  setInputValue,
} from "../../../../redux/main-branch-reducer";

const LocationContainer = (props) => {
  return (
    <Location
      getWeather={props.getWeather}
      inputValue={props.inputValue}
      setInputValue={props.setInputValue}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    inputValue: state.mainBranch.inputValue,
  };
};

export default connect(mapStateToProps, { getWeather, setInputValue })(
  LocationContainer
);
