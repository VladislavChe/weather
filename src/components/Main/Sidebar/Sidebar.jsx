import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import SearchContainer from "./Search/SearchContainer";
import LocationContainer from "./Location/LocationContainer";

const Sidebar = () => {
  let [value, setValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchContainer value={value} setValue={setValue} />
      </div>
      <div className={styles.locationWrapper}>
        <LocationContainer value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Sidebar;
