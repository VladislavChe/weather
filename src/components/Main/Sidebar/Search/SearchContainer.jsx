import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import {
  getWeather,
  setInputValue,
} from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
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

export default connect(mapStateToProps, {
  getWeather,
  setInputValue,
})(SearchContainer);
