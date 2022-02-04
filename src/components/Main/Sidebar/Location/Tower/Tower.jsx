import React from 'react';
import { choosedTowerActionCreator } from '../../../../../redux/main-branch-reducer';
import styles from './Tower.module.css';

const Tower = (props) => {
  const clickTower = () => {
    let city = props.card.city;
    let degrees = props.card.degrees;
    let street = props.card.street;
    let humidity = props.card.humidity;
    let wind = props.card.wind;

    props.dispatch(
      choosedTowerActionCreator(city, degrees, street, humidity, wind)
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
