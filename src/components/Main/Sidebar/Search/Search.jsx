import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../../img/search-icon.png";

const Search = () => {
  return (
    <div>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Search city" />
        <img className={styles.img} src={searchIcon} alt="loop" />
      </form>
    </div>
  );
};

export default Search;
