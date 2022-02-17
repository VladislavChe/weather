import { connect } from "react-redux";
import { choosedTowerActionCreator } from "../../../../../redux/main-branch-reducer";
import Towers from "./Towers";

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    clickTower: (card) => {
      dispatch(choosedTowerActionCreator(card));
    },
  };
};

export const TowersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Towers);
