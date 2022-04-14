import React from "react";
import { connect } from "react-redux";
import {
  addToLocalStorage,
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
    <Towers
      clickTower={clickTower}
      cards={props.mainBranch.cards}
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
  choosedTower,
  isLoading,
  getWeather,
  addToLocalStorage,
})(TowersContainer);
