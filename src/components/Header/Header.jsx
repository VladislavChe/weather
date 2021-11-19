import React from 'react';
import Logo from '../Logo/Logo';
import Days from './Days/Days';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Days />
        </div>
      </div>
    </header>
  );
};

export default Header;
