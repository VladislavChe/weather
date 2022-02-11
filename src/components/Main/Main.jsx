import React from 'react';
import Card from './Card/Card';
import CardContainer from './Card/CardContainer';
import styles from './Main.module.css';
import Sidebar from './Sidebar/Sidebar';

const Main = (props) => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <CardContainer />
          </div>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
