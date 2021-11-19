import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.сard}>
      <h2 className={styles.сity}>London</h2>
      <div className={styles.body}>
        <div className={styles.degrees}>
          <span>11</span>°
        </div>
        <div className={styles.info}>
          <div className={styles.street}>Broken Cluds</div>
          <div className={styles.wet}>humidity: 95%</div>
          <div className={styles.wind}>wind: 2m/s N</div>
          <div className={styles.pressure}>H 16 • L 11 </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
