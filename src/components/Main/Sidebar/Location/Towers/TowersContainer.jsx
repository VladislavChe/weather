import React from "react";
import { connect } from "react-redux";
import {
  clearLocalStorage,
  getWeather,
  isLoading,
} from "../../../../../redux/main-branch-reducer";
import Towers from "./Towers";

const TowersContainer = (props) => {
  const clickTower = (tower) => {
    props.getWeather(tower);
  };

  return (
    <Towers
      clickTower={clickTower}
      clearLocalStorage={props.clearLocalStorage}
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
})(TowersContainer);
