import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../../../img/search-icon.png';

const Search = () => {
  return (
    <div>
      <form action="#" className={styles.form}>
        <input className={styles.input} type="text" placeholder="Search city" />
        <img className={styles.img} src={searchIcon} />
      </form>
    </div>
  );
};

export default Search;
