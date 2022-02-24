import React from 'react';
import styles from './Location.module.css';
import TowersContainer from './Towers/TowersContainer';

const Location = (props) => {
  let favouriteLocation = props.favouriteLocation;
  const clickAddLocation = () => {
    favouriteLocation = props.searchText;
    props.addFavouriteLocations(favouriteLocation);
  };
  return (
    <div onClick={clickAddLocation} className={styles.location}>
      <div className={styles.add}>
        <div className={styles.plus}>
          <span>+</span>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Add Location</div>
          <p className={styles.text}>Did you know you can add favourite locations?</p>
        </div>
      </div>
      <TowersContainer />
    </div>
  );
};

export default Location;
