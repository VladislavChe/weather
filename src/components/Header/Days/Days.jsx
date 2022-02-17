import React from "react";
import styles from "./Days.module.css";
import { NavLink } from "react-router-dom";

const Days = () => (
  <ul className={styles.days}>
    <li>
      <NavLink to="/">Yesterday</NavLink>
    </li>
    <li>
      <NavLink to="/" className={styles.active}>
        Today
      </NavLink>
    </li>
    <li>
      <NavLink to="/">Tomorrow</NavLink>
    </li>
    <li>
      <NavLink to="/">Week</NavLink>
    </li>
    <li>
      <NavLink to="/">Month</NavLink>
    </li>
  </ul>
);

export default Days;
