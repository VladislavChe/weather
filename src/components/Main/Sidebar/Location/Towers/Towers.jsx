import React from 'react';
import styles from './Towers.module.css';

const Towers = ({ cards, clickTower }) => {
  return (
    <ul className={styles.list}>
      {cards.map((el, i) => {
        const hendler = () => {
          clickTower(el);
        };
        return (
          <li key={i} onClick={hendler}>
            <span className={styles.arrow}>
              <ArrowIcon />
            </span>
            <p className={styles.name}>{el}</p>
          </li>
        );
      })}
    </ul>
  );
};

const ArrowIcon = () => (
  <svg height="512px" version="1.1" viewBox="0 0 512 512" width="512px">
    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
  </svg>
);

export default Towers;
