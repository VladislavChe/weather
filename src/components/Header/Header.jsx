import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import DaysContainer from "./Days/DaysContainer";

const Header = (props) => {
  let date = new Date();
  function getWeekDay(date) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date];
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <DaysContainer
            days={[
              "TODAY",
              getWeekDay(date.getDay() + 1),
              getWeekDay(date.getDay() + 2),
              getWeekDay(date.getDay() + 3),
              getWeekDay(date.getDay() + 4),
              getWeekDay(date.getDay() + 5),
              getWeekDay(date.getDay() + 6),
              getWeekDay(date.getDay() + 7),
            ]}
          />
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
};

export default Header;
