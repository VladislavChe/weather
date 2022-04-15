import React from "react";
import CardContainer from "./Card/CardContainer";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate } from "react-router-dom";

const Main = (props) => {
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CardContainer />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
