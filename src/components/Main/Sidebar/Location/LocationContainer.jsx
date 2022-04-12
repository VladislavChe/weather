import React from "react";
import Location from "./Location";
import { connect } from "react-redux";
import { addFavouriteLocations } from "./../../../../redux/main-branch-reducer";
import { getWeather } from "../../../../redux/main-branch-reducer";

const LocationContainer = (props) => {
  return (
    <Location
      addFavouriteLocations={props.addFavouriteLocations}
      getWeather={props.getWeather}
      searchText={props.mainBranch.searchText}
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

export default connect(mapStateToProps, { addFavouriteLocations, getWeather })(
  LocationContainer
);
