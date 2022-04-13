import React, { useEffect, useState } from "react";
import styles from "./Towers.module.css";

const Towers = ({ clickTower }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("items"));
    if (cards) {
      setCards(cards);
    }
  }, []);
  return (
    <ul className={styles.list}>
      <span className={styles.clearAll}>Clear All (x)</span>
      {cards.map((el, i) => {
        // localStorage.setItem("city:", cards);
        // addToLocalStorage(cards);
        const hendler = () => {
          clickTower(el);
        };
        return (
          <li key={i} onClick={hendler}>
            <div className={styles.townWrapp}>
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
              <p className={styles.name}>{el}</p>
            </div>
            <span className={styles.close}>X</span>
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
