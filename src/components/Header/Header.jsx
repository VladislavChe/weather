import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          Header
        </div>
      </div>
    </header>
  );
};

export default Header;
