import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { updateSearchSymbol } from '../../../../redux/main-branch-reducer';

const SearchContainer = (props) => {
  return (
    <Search
      updateSearchSymbol={props.updateSearchSymbol}
      searchText={props.mainBranch.searchText}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { updateSearchSymbol })(SearchContainer);
