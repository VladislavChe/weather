import React from "react";
import styles from "./Tower.module.css";

const Tower = ({ mainBranch: { cards }, clickTower }) =>
  cards.map(({ city, degrees, street, humidity, wind }) => {
    const handler = () => clickTower(city, degrees, street, humidity, wind);

    return (
      <li onClick={handler} key={city}>
        <span className={styles.arrow}>{">"}</span>
        <a href="#">{city}</a>
      </li>
    );
  });

export default Tower;
