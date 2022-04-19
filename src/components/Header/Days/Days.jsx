import React, { useState } from "react";
import styles from "./Days.module.css";
import { NavLink } from "react-router-dom";

const Days = (props) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <ul className={styles.days}>
      {props.days.map((day, index) => {
        return (
          <li
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? styles.active : ""}
            key={`${day} ${index}`}
          >
            <NavLink to="/">{day}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Days;
