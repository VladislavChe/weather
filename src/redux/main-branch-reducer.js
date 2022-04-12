import { API } from "./../API/api";
const CHOOSED_TOWER = "CHOOSED-TOWER";
const NEW_SEARCH_TEXT = "NEW_SEARCH_TEXT";
const ADD_FAVOURITE_LOCATIONS = "ADD_FAVOURITE_LOCATIONS";

let initialState = {
  cards: [],
  card: {
    city: "City",
    degrees: 11,
    street: "Broken Cluds",
    humidity: 94,
    wind: 4,
  },
  searchText: "",
  isLoading: false,
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: action.state,
      };
    case CHOOSED_TOWER:
      return {
        ...state,
        card: action.card,
      };
    case NEW_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.newText,
      };
    case ADD_FAVOURITE_LOCATIONS:
      return {
        ...state,
        cards: [...state.cards, action.location],
        searchText: action.location,
      };

    default:
      return state;
  }
};

//Action Creators
export const choosedTower = (card) => ({
  type: CHOOSED_TOWER,
  card,
});
export const addFavouriteLocations = (location) => ({
  type: ADD_FAVOURITE_LOCATIONS,
  location,
});
export const isLoading = (state) => ({ type: "LOADING", state });

//Thunk creators
export const getWeather = (tower) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    const data = await API.getCityName(tower);
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
      street: "Broken Cluds",
      humidity: humidity,
      wind: wind,
    };
    dispatch(choosedTower(card));
    dispatch(isLoading(false));
  };
};

export default mainBranchReducer;
