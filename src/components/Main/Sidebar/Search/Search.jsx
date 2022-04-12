import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";

const Search = (props) => {
  let [value, setValue] = [props.value, props.setValue];

  const searchTown = (town) => {
    props.getWeather(town);
  };
  const addFavouriteLocations = (values) => {
    props.addFavouriteLocations(values);
    searchTown(values);
    setValue("");
  };
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        addFavouriteLocations(value);
      }}
    >
      <input
        onChange={(event) => setValue(event.target.value)}
        name={"serchInput"}
        placeholder="Search city"
        className={styles.input}
        type="text"
        value={value}
      />
      <button>
        <img className={styles.img} src={searchIcon} alt="loop" />
      </button>
    </form>
  );
};
export default Search;
