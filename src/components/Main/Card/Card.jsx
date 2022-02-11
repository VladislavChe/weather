import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.сard}>
      <h2 className={styles.сity}>{props.mainBranch.card.city}</h2>
      <div className={styles.body}>
        <div className={styles.degrees}>
          <span>{props.mainBranch.card.degrees}</span>°
        </div>
        <div className={styles.info}>
          <div className={styles.street}>{props.mainBranch.card.street}</div>
          <div className={styles.wet}>humidity: {props.mainBranch.card.humidity}%</div>
          <div className={styles.wind}>wind: {props.mainBranch.card.wind}m/s N</div>
          <div className={styles.pressure}>H 16 • L 11 </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
