import React from "react";
import { connect } from "react-redux";
import Days from "./Days";
import { getWeather } from "../../../redux/main-branch-reducer";

const DaysContainer = (props) => {
  let date = new Date();
  function getWeekDay(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[date];
  }
  return (
    <Days
      days={[
        "TODAY",
        getWeekDay(date.getDay() + 1),
        getWeekDay(date.getDay() + 2),
        getWeekDay(date.getDay() + 3),
        getWeekDay(date.getDay() + 4),
        getWeekDay(date.getDay() + 5),
        getWeekDay(date.getDay() + 6),
      ]}
      getWeather={props.getWeather}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  getWeather,
})(DaysContainer);
