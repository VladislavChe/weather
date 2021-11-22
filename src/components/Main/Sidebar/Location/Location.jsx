import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.add}>
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
      <ul className={styles.list}>
        <li>
          <img
            className={styles.arrow}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplIN8Z-vuJrxbqFOxJUNe_CmWjVlaF4B2BQ&usqp=CAU"
            alt="arrow"
          />
          <a href="#">Moscow</a>
        </li>
        <li>
          <img
            className={styles.arrow}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplIN8Z-vuJrxbqFOxJUNe_CmWjVlaF4B2BQ&usqp=CAU"
            alt="arrow"
          />
          <a href="#">Kolomna</a>
        </li>
        <li>
          <img
            className={styles.arrow}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplIN8Z-vuJrxbqFOxJUNe_CmWjVlaF4B2BQ&usqp=CAU"
            alt="arrow"
          />
          <a href="#">Kasimov</a>
        </li>
        <li>
          <img
            className={styles.arrow}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplIN8Z-vuJrxbqFOxJUNe_CmWjVlaF4B2BQ&usqp=CAU"
            alt="arrow"
          />
          <a href="#">Ryazani</a>
        </li>
        <li>
          <img
            className={styles.arrow}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplIN8Z-vuJrxbqFOxJUNe_CmWjVlaF4B2BQ&usqp=CAU"
            alt="arrow"
          />
          <a href="#">Domodedovo</a>
        </li>
      </ul>
    </div>
  );
};

export default Location;
