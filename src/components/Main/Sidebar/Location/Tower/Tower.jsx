import React from 'react';
import styles from './Tower.module.css';

const Tower = (props) => {
  console.log(props);
  return (
    <li>
      <span className={styles.arrow}>></span>
      <a href="#">{props.tower}</a>
    </li>
  );
};

export default Tower;
