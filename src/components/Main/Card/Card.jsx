import React from 'react';
import StoreContext from '../../../storeContext';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        return (
          <div className={styles.сard}>
            <h2 className={styles.сity}>{state.mainBranch.card.city}</h2>
            <div className={styles.body}>
              <div className={styles.degrees}>
                <span>{state.mainBranch.card.degrees}</span>°
              </div>
              <div className={styles.info}>
                <div className={styles.street}>
                  {state.mainBranch.card.street}
                </div>
                <div className={styles.wet}>
                  humidity: {state.mainBranch.card.humidity}%
                </div>
                <div className={styles.wind}>
                  wind: {state.mainBranch.card.wind}m/s N
                </div>
                <div className={styles.pressure}>H 16 • L 11 </div>
              </div>
            </div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Card;
