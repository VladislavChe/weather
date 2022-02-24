import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../../../img/search-icon.png';

const Search = (props) => {
  let newSymbol = React.createRef();

  let onSearchChange = () => {
    let symbol = newSymbol.current.value;
    props.updateSearchSymbol(symbol);
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          onChange={onSearchChange}
          ref={newSymbol}
          className={styles.input}
          type="text"
          placeholder="Search city"
          value={props.searchText}
        />
        <img className={styles.img} src={searchIcon} alt="loop" />
      </form>
    </div>
  );
};

export default Search;
