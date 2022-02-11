import React from "react";
import styles from "./Days.module.css";

const Days = () => (
  <ul className={styles.days}>
    <li>
      <a href="#">Yesterday</a>
    </li>
    <li>
      <a href="#" className={styles.active}>
        Today
      </a>
    </li>
    <li>
      <a href="#">Tomorrow</a>
    </li>
    <li>
      <a href="#">Week</a>
    </li>
    <li>
      <a href="#">Month</a>
    </li>
  </ul>
);

export default Days;
