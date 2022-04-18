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
    // <ul className={styles.days}>
    //   <li>
    //     <NavLink to="/">Yesterday</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/" className={styles.active}>
    //       Today
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/">Tomorrow</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/">Week</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/">Month</NavLink>
    //   </li>
    // </ul>
  );
};

export default Days;
