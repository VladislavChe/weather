import React from "react";
import styles from "./Card.module.css";

const Card = ({ card }) => {
  let a = card.city;
  let arr = a.split(" ");

  if (arr.includes("correctly")) {
    console.log("da");
  }
  return (
    <div className={styles.сard}>
      <h2
        className={
          arr.includes("correctly")
            ? `${styles.сity} ${styles.сityError}`
            : styles.сity
        }
      >
        {card.city}
      </h2>
      <div className={styles.body}>
        <div className={styles.degrees}>
          <span>{card.degrees}</span>°
        </div>
        <div className={styles.info}>
          <div className={styles.wet}>humidity: {card.humidity}%</div>
          <div className={styles.wind}>wind: {card.wind} m/s</div>
          {/*<div className={styles.pressure}>H 16 • L 11 </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Card;
