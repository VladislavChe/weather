import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  const clickTower = () => {
    props.dispatch({
      type: 'CHOOSED-TOWER',
      city: props.card.city,
      degrees: props.card.degrees,
      street: props.card.street,
      humidity: props.card.humidity,
      wind: props.card.wind,
    });
  };

  return (
    <li onClick={clickTower}>
      <span className={styles.arrow}>></span>
      <a>{props.card.city}</a>
    </li>
  );
};

export default Tower;
