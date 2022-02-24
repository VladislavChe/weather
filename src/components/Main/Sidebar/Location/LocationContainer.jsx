import React from 'react';
import Location from './Location';
import { connect } from 'react-redux';
import { addFavouriteLocations } from './../../../../redux/main-branch-reducer';

const LocationContainer = (props) => {
  return (
    <Location
      addFavouriteLocations={props.addFavouriteLocations}
      favouriteLocation={props.mainBranch.favouriteLocation}
      searchText={props.mainBranch.searchText}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { addFavouriteLocations })(LocationContainer);
