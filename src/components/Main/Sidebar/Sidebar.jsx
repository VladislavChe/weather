import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import SearchContainer from "./Search/SearchContainer";
import LocationContainer from "./Location/LocationContainer";

const Sidebar = () => {
  let [inputValue, setInputValue] = useState("");
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          items={items}
          setItems={setItems}
        />
      </div>
      <div className={styles.locationWrapper}>
        <LocationContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  );
};

export default Sidebar;
