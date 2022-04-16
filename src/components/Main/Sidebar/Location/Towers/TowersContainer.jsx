import React from "react";
import { connect } from "react-redux";
import {
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
      cards={props.mainBranch.cards}
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
  isLoading,
  getWeather,
})(TowersContainer);
