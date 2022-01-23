import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  // debugger;
  return (
    <div className={styles.сard}>
      <h2 className={styles.сity}>{props.choosedCity}</h2>
      <div className={styles.body}>
        <div className={styles.degrees}>
          <span>{props.degrees}</span>°
        </div>
        <div className={styles.info}>
          <div className={styles.street}>{props.street}</div>
          <div className={styles.wet}>humidity: {props.humidity}%</div>
          <div className={styles.wind}>wind: {props.wind}m/s N</div>
          <div className={styles.pressure}>H 16 • L 11 </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
