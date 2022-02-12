import React from "react";
import styles from "./Card.module.css";

const Card = ({ mainBranch: { card } }) => {
  return (
    <div className={styles.сard}>
      <h2 className={styles.сity}>{card.city}</h2>
      <div className={styles.body}>
        <div className={styles.degrees}>
          <span>{card.degrees}</span>°
        </div>
        <div className={styles.info}>
          <div className={styles.street}>{card.street}</div>
          <div className={styles.wet}>humidity: {card.humidity}%</div>
          <div className={styles.wind}>wind: {card.wind}m/s N</div>
          <div className={styles.pressure}>H 16 • L 11 </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
