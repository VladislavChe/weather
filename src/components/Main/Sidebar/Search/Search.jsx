import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";

const Search = (props) => {
  let [inputValue, setInputValue] = [props.inputValue, props.setInputValue];

  const searchTown = (town) => {
    props.getWeather(town);
  };
  const addFavouriteLocations = (values) => {
    props.addFavouriteLocations(values);
    searchTown(values);
    props.setItems([values, ...props.items]);
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
