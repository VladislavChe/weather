import React from 'react';
import styles from './Tower.module.css';

const Tower = ({ mainBranch: { cards }, clickTower }) =>
  cards.map((card) => {
    const handler = () => clickTower(card);

    return (
      <li onClick={handler} key={card.city}>
        <span className={styles.arrow}>{'>'}</span>
        <a href="#">{card.city}</a>
      </li>
    );
  });

export default Tower;
