import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import {
  addFavouriteLocations,
  addToLocalStorage,
  getWeather,
} from "../../../../redux/main-branch-reducer";

const SearchContainer = (props) => {
  return (
    <Search
      addFavouriteLocations={props.addFavouriteLocations}
      getWeather={props.getWeather}
      value={props.value}
      setValue={props.setValue}
      addToLocalStorage={props.addToLocalStorage}
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
  addFavouriteLocations,
  getWeather,
  addToLocalStorage,
})(SearchContainer);
