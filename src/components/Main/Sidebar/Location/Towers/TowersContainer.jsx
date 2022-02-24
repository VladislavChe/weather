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

  clickTower = (card) => {
    console.log(card.city);
  };

  render() {
    return (
      <Towers
        clickTower={this.clickTower}
        choosedTower={this.props.choosedTower}
        mainBranch={this.props.mainBranch}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { choosedTower })(TowersContainer);
