import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../common/formsControls/formsControls";

const Search = (props) => {
  const searchTown = (town) => {
    props.getWeather(town);
  };
  const addFavouriteLocations = (values) => {
    props.addFavouriteLocations(props.searchText);
    searchTown(props.searchText);
    values.serchInput = "";
  };
  const SearchTextChange = (values) => {
    props.newSearchText(values.serchInput);
  };
  return (
    <SearchReduxForm
      onChange={SearchTextChange}
      onSubmit={addFavouriteLocations}
    />
  );
};

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <Field
        component={Input}
        name={"serchInput"}
        placeholder="Search city"
        className={styles.input}
        type="text"
      />
      <button>
        <img className={styles.img} src={searchIcon} alt="loop" />
      </button>
    </form>
  );
};

const SearchReduxForm = reduxForm({
  form: "Search", // Уникальное имя формы
})(SearchForm);

export default Search;
