import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Days from "./Days/Days";
import styles from "./Header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.wrapper}>
        <Logo />
        <Days />
        {props.isAuth ? (
          <div className={styles.login}>
            {props.login}{" "}
            <button className={styles.btn} onClick={props.logout}>
              Logout
            </button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </div>
  </header>
);

export default Header;
