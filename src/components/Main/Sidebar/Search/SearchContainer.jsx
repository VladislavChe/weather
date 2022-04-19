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
      setInputValue={props.setInputValue}
      inputValue={props.inputValue}
      items={props.items}
      setItems={props.setItems}
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
