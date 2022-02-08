import React from 'react';
import { choosedTowerActionCreator } from '../../../../../redux/main-branch-reducer';
import Tower from './Tower';

const TowerContainer = (props) => {
  let state = props.store.getState();

  const clickTower = (city, degrees, street, humidity, wind) => {
    props.store.dispatch(
      choosedTowerActionCreator(city, degrees, street, humidity, wind)
    );
  };

  return state.mainBranch.cards.map((card) => {
    return <Tower card={card} clickTower={clickTower} />;
  });
};

export default TowerContainer;
