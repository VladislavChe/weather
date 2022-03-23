import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import {
  addFavouriteLocations,
  newSearchText,
} from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
      addFavouriteLocations={props.addFavouriteLocations}
      newSearchText={props.newSearchText}
      searchText={props.mainBranch.searchText}
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
})(SearchContainer);
