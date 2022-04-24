import React from "react";
import { connect } from "react-redux";
import {
  addFavouriteCity,
  clearLocalStorage,
  getWeather,
  isLoading,
} from "../../../../../redux/main-branch-reducer";
import Towers from "./Towers";

const TowersContainer = (props) => {
  const clickTower = (tower, index) => {
    props.getWeather(tower, index);
  };

  return (
    <Towers
      clickTower={clickTower}
      clearLocalStorage={props.clearLocalStorage}
      addFavouriteCity={props.addFavouriteCity}
      items={props.mainBranch.favouriteList}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, {
  isLoading,
  getWeather,
  clearLocalStorage,
  addFavouriteCity,
})(TowersContainer);
