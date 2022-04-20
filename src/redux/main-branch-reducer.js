import { API } from "./../API/api";
import { Storage } from "../utils/LocalStorage/localStorage";
const INPUT_VALUE = "INPUT_VALUE";
const LOADING = "LOADING";
const SET_CARD = "SET_CARD";
const ADD_FAVOURITE = "ADD_FAVOURITE";
const CLEAR_STORAGE = "ADD_FAVOURITE";

let initialState = {
  card: {
    city: "Enter a city",
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
        favouriteList: [...state.favouriteList, action.city],
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
export const setCard = (card, boolean) => ({
  type: SET_CARD,
  card,
  boolean,
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
  return (dispatch) => {
    dispatch(
      clearLocalStorageAC(localStorage.setItem("items", JSON.stringify(item)))
    );
  };
};

export const getWeather = (tower) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    const data = await API.getCityName(tower);
    if (data.length > 0) {
      let lat = data[0].lat;
      let lon = data[0].lon;

      const result = await API.getCurrentCity(lat, lon);
      let city = result.name;
      let degrees = Math.round(result.main.temp - 273.15);
      let humidity = result.main.humidity;
      let wind = Math.round(result.wind.speed);

      let card = {
        city: city,
        degrees: degrees,
        humidity: humidity,
        wind: wind,
      };

      dispatch(setCard(card, true));
      localStorage.setItem("mainCard", JSON.stringify(card));

      localStorage.setItem("items", JSON.stringify([card.city]));
      dispatch(addFavouriteCity(JSON.parse(localStorage.getItem("items"))));
    } else {
      let card = {
        city: "Enter the city correctly",
        degrees: 11,
        humidity: 94,
        wind: 4,
      };
      dispatch(setCard(card, false));
    }

    dispatch(isLoading(false));
  };
};

export default mainBranchReducer;
