import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../../../../API/api';
import { choosedTower } from '../../../../../redux/main-branch-reducer';
import Towers from './Towers';

class TowersContainer extends React.Component {
  componentDidMount() {
    // API.getCityName(this.cardCity).then((data) => {
    //   console.log(data);
    // });
  }

  clickTower = (tower) => {
    this.props.choosedTower(tower);
    console.log(tower);
  };

  render() {
    return <Towers clickTower={this.clickTower} cards={this.props.mainBranch.cards} />;
  }
}

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { choosedTower })(TowersContainer);
