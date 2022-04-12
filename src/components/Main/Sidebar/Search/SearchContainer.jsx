import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import {
  addFavouriteLocations,
  getWeather,
} from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
      addFavouriteLocations={props.addFavouriteLocations}
      searchText={props.mainBranch.searchText}
      getWeather={props.getWeather}
      value={props.value}
      setValue={props.setValue}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, {
  addFavouriteLocations,
  getWeather,
})(SearchContainer);
