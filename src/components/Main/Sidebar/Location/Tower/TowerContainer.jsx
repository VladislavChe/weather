import { connect } from 'react-redux';
import { choosedTowerActionCreator } from '../../../../../redux/main-branch-reducer';
import Tower from './Tower';

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

const TowerContainer = connect(mapStateToProps, mapDispatchToProps)(Tower);

export default TowerContainer;
