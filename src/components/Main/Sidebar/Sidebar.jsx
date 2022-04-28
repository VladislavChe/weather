import React from "react";
import styles from "./Sidebar.module.css";
import SearchContainer from "./Search/SearchContainer";
import LocationContainer from "./Location/LocationContainer";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchContainer />
      </div>
      <div className={styles.locationWrapper}>
        <LocationContainer />
      </div>
    </div>
  );
};

export default Sidebar;