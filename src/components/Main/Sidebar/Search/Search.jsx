import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";

const Search = ({ getWeather, inputValue, setInputValue }) => {
  const searchTown = (town) => {
    getWeather(town, 0);
    setInputValue("");
  };
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        searchTown(inputValue);
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
