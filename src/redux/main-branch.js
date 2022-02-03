const CHOOSED_TOWER = 'CHOOSED-TOWER';

const mainBranchReducer = (state, action) => {
  switch (action.type) {
    case CHOOSED_TOWER:
      let choosedCity = {
        city: action.city,
        degrees: action.degrees,
        street: action.street,
        humidity: action.humidity,
        wind: action.wind,
      };
      state.card = choosedCity;
      return state;

    default:
      return state;
  }
};

export const choosedTowerActionCreator = (
  city,
  degrees,
  street,
  humidity,
  wind
) => ({
  type: CHOOSED_TOWER,
  city: city,
  degrees: degrees,
  street: street,
  humidity: humidity,
  wind: wind,
});
export default mainBranchReducer;
