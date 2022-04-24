import { API } from "./../API/api";
const INPUT_VALUE = "INPUT_VALUE";
const LOADING = "LOADING";
const SET_CARD = "SET_CARD";
const ADD_FAVOURITE = "ADD_FAVOURITE";
const CLEAR_STORAGE = "ADD_FAVOURITE";

let initialState = {
  card: {
    city: "Enter the city",
    degrees: 11,
    humidity: 94,
    wind: 4,
  },
  favouriteList: JSON.parse(localStorage.getItem("items")) ?? [],
  inputValue: "",
  isLoading: false,
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        card: action.card,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteList: action.city,
      };
    case CLEAR_STORAGE:
      return {
        ...state,
        favouriteList: action.storage,
      };
    case INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.state,
      };
    default:
      return state;
  }
};

//Action Creators
export const setCard = (card) => ({
  type: SET_CARD,
  card,
});

export const addFavouriteCity = (city) => ({
  type: ADD_FAVOURITE,
  city,
});

export const setInputValue = (value) => ({
  type: INPUT_VALUE,
  value,
});

//Action Creators
export const isLoading = (state) => ({
  type: LOADING,
  state,
});

export const clearLocalStorageAC = (storage) => ({
  type: CLEAR_STORAGE,
  storage,
});

//Thunk creators
export const clearLocalStorage = (item) => {
  const card = {
    city: "Enter the city",
    degrees: 11,
    humidity: 94,
    wind: 4,
  };
  return (dispatch) => {
    dispatch(setCard(card));
    dispatch(
      clearLocalStorageAC(localStorage.setItem("items", JSON.stringify(item)))
    );
    dispatch(addFavouriteCity([]));
  };
};

export const getWeather = (tower, day) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    const data = await API.getLatLonByCityName(tower);
    if (data.length > 0) {
      let lat = data[0].lat;
      let lon = data[0].lon;

      const result = await API.getTodayWeather(lat, lon);
      let city = tower;
      let degrees = Math.round(result.daily[day].temp.day - 273.15);
      let humidity = result.daily[day].humidity;
      let wind = result.daily[day].wind_speed;

      let card = {
        city: city,
        degrees: degrees,
        humidity: humidity,
        wind: wind,
      };

      dispatch(setCard(card));
      localStorage.setItem("mainCard", JSON.stringify(card));

      if (JSON.parse(localStorage.getItem("items")) === null) {
        localStorage.setItem("items", JSON.stringify([]));
      }
      if (!JSON.parse(localStorage.getItem("items").includes(card.city))) {
        localStorage.setItem(
          "items",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("items")),
            card.city,
          ])
        );
      }

      dispatch(addFavouriteCity(JSON.parse(localStorage.getItem("items"))));
    } else {
      const card = {
        city: "Enter the city correctly",
        degrees: 11,
        humidity: 94,
        wind: 4,
      };
      dispatch(setCard(card));
    }

    dispatch(isLoading(false));
  };
};

export default mainBranchReducer;
