import React from "react";
import { connect } from "react-redux";
import { API } from "../../../../../API/api";
import {
  choosedTower,
  getWeather,
  isLoading,
} from "../../../../../redux/main-branch-reducer";
import Towers from "./Towers";

const TowersContainer = (props) => {
  const clickTower = (tower) => {
    props.getWeather(tower);
  };

  return props.mainBranch.isLoading ? (
    "Loading"
  ) : (
    <Towers clickTower={clickTower} cards={props.mainBranch.cards} />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, {
  choosedTower,
  isLoading,
  getWeather,
})(TowersContainer);
