import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import SearchContainer from "./Search/SearchContainer";
import LocationContainer from "./Location/LocationContainer";
import { addFavouriteCity } from "../../../redux/main-branch-reducer";

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
