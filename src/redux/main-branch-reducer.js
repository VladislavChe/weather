import { API } from "./../API/api";
const LOADING = "LOADING";

let initialState = {
  card: {
    city: "Select a city",
    degrees: 11,
    humidity: 94,
    wind: 4,
  },
  isLoading: false,
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
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
export const isLoading = (state) => ({
  type: LOADING,
  state,
});

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
      humidity: humidity,
      wind: wind,
    };

    localStorage.setItem("mainCard", JSON.stringify(card));
    dispatch(isLoading(false));
  };
};

export default mainBranchReducer;
