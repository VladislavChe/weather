import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  const onClickTower = () => {
    let city = props.card.city;
    let degrees = props.card.degrees;
    let street = props.card.street;
    let humidity = props.card.humidity;
    let wind = props.card.wind;

    props.clickTower(city, degrees, street, humidity, wind);
  };

  return (
    <li onClick={onClickTower}>
      <span className={styles.arrow}>></span>
      <a>{props.card.city}</a>
    </li>
  );
};

export default Tower;
