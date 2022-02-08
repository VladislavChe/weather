import React from 'react';
import { choosedTowerActionCreator } from '../../../../../redux/main-branch-reducer';
import StoreContext from '../../../../../storeContext';
import Tower from './Tower';

const TowerContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const clickTower = (city, degrees, street, humidity, wind) => {
          store.dispatch(
            choosedTowerActionCreator(city, degrees, street, humidity, wind)
          );
        };

        return state.mainBranch.cards.map((card) => {
          return <Tower card={card} clickTower={clickTower} />;
        });
      }}
    </StoreContext.Consumer>
  );
};

export default TowerContainer;
