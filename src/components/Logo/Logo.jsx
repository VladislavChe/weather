import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/main" className={styles.logo}>
    Weather <span>forecast</span>
  </Link>
);

export default Logo;
