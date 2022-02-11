import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  let city = props.mainBranch.cards.map((card) => {
    const onClickTower = () => {
      let city = card.city;
      let degrees = card.degrees;
      let street = card.street;
      let humidity = card.humidity;
      let wind = card.wind;

      props.clickTower(city, degrees, street, humidity, wind);
    };
    return (
      <li onClick={onClickTower}>
        <span className={styles.arrow}>{'>'}</span>
        <a>{card.city}</a>
      </li>
    );
  });

  return city;
};

export default Tower;
