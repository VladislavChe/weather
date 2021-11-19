import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      Weather <span>forecast</span>
    </a>
  );
};

export default Logo;
