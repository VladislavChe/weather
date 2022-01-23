import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  const clickTower = () => {
    props.choosedTower(props.tower);
  };

  return (
    <li onClick={clickTower}>
      <span className={styles.arrow}>></span>
      <a>{props.tower}</a>
    </li>
  );
};

export default Tower;
