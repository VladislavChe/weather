import React from "react";
import styles from "./Location.module.css";
import TowersContainer from "./Towers/TowersContainer";

const Location = (props) => {
  let [value, setValue] = [props.value, props.setValue];

  const clickAddLocation = () => {
    props.addFavouriteLocations(value);
    props.getWeather(value);
    props.setItems([value, ...props.items]);
    setValue("");
  };
  return (
    <div className={styles.location}>
      <div onClick={clickAddLocation} className={styles.add}>
        <div className={styles.plus}>
          <span>+</span>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Add Location</div>
          <p className={styles.text}>
            Did you know you can add favourite locations?
          </p>
        </div>
      </div>
      <TowersContainer items={props.items} setItems={props.setItems} />
    </div>
  );
};

export default Location;
