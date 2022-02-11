import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
