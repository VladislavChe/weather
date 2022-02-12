import React from "react";
import Search from "./Search/Search";
import Location from "./Location/Location";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.locationWrapper}>
        <Location />
      </div>
    </div>
  );
};

export default Sidebar;
