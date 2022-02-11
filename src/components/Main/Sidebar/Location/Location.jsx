import React from 'react';
import styles from './Location.module.css';
import TowerContainer from './Tower/TowerContainer';

const Location = (props) => {
  return (
    <div className={styles.location}>
      <div className={styles.add}>
        <div className={styles.plus}>
          <span>+</span>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Add Location</div>
          <p className={styles.text}>Did you know you can add favourite locations?</p>
        </div>
      </div>
      <ul className={styles.list}>
        <TowerContainer />
      </ul>
    </div>
  );
};

export default Location;
