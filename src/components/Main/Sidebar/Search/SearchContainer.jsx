import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import {
  addFavouriteLocations,
  getWeather,
  newSearchText,
} from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
      addFavouriteLocations={props.addFavouriteLocations}
      newSearchText={props.newSearchText}
      searchText={props.mainBranch.searchText}
      getWeather={props.getWeather}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, {
  newSearchText,
  addFavouriteLocations,
  getWeather,
})(SearchContainer);
