import React from "react";
import Location from "./Location";
import { connect } from "react-redux";
import { getWeather } from "../../../../redux/main-branch-reducer";

const LocationContainer = (props) => {
  return (
    <Location
      getWeather={props.getWeather}
      inputValue={props.inputValue}
      setInputValue={props.setInputValue}
      items={props.items}
      setItems={props.setItems}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { getWeather })(LocationContainer);
