import { connect } from 'react-redux';
import { choosedTower } from '../../../../../redux/main-branch-reducer';
import Towers from './Towers';

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export const TowersContainer = connect(mapStateToProps, { choosedTower })(Towers);
