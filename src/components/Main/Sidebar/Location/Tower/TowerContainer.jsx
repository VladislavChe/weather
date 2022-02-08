import React from 'react';
import { choosedTowerActionCreator } from '../../../../../redux/main-branch-reducer';
import Tower from './Tower';

const TowerContainer = (props) => {
  const clickTower = (city, degrees, street, humidity, wind) => {
    props.store.dispatch(
      choosedTowerActionCreator(city, degrees, street, humidity, wind)
    );
  };

  return <Tower card={props.card} clickTower={clickTower} />;
};

export default TowerContainer;
