import React from "react";
import styles from "./Towers.module.css";

const Towers = (props) => {
  const cards = props.items ?? [];

  const clearLocalStorage = () => {
    props.setItems([]);
  };

  const removeItem = (index) => {
    let newCards = cards.filter((card, i) => i !== index);
    props.setItems([...newCards]);
  };

  return cards.length > 0 ? (
    <ul className={styles.list}>
      <span onClick={clearLocalStorage} className={styles.clearAll}>
        Clear All (x)
      </span>
      {cards.map((el, i) => {
        const handler = () => {
          props.clickTower(el);
        };
        return (
          <li key={i} onClick={handler}>
            <div className={styles.townWrapp}>
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
              <p onClick={clearLocalStorage} className={styles.name}>
                {el}
              </p>
            </div>
            <span onClick={() => removeItem(i)} className={styles.close}>
              x
            </span>
          </li>
        );
      })}
    </ul>
  ) : null;
};

const ArrowIcon = () => (
  <svg height="512px" version="1.1" viewBox="0 0 512 512" width="512px">
    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
  </svg>
);

export default Towers;
