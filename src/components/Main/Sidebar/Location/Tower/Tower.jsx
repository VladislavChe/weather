import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  const clickTower = () => {
    props.choosedTower(
      props.card.city,
      props.card.degrees,
      props.card.street,
      props.card.humidity,
      props.card.wind
    );
  };

  return (
    <li onClick={clickTower}>
      <span className={styles.arrow}>></span>
      <a>{props.card.city}</a>
    </li>
  );
};

export default Tower;
