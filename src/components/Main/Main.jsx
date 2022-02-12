import React from "react";
import CardContainer from "./Card/CardContainer";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => (
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

export default Main;
