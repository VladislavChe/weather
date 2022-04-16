import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import { getWeather } from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
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

export default connect(mapStateToProps, {
  getWeather,
})(SearchContainer);
