import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";

const Search = ({ getWeather, items, setItems, inputValue, setInputValue }) => {
  const searchTown = (town) => {
    getWeather(town);
  };
  const addFavouriteLocations = (values) => {
    searchTown(values);
    setItems([values, ...items]);
    setInputValue("");
  };
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        addFavouriteLocations(inputValue);
      }}
    >
      <input
        onChange={(event) => setInputValue(event.target.value)}
        name={"serchInput"}
        placeholder="Search city"
        className={styles.input}
        type="text"
        value={inputValue}
      />
      <button>
        <img className={styles.img} src={searchIcon} alt="loop" />
      </button>
    </form>
  );
};
export default Search;
