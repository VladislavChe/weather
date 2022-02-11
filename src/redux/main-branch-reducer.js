const CHOOSED_TOWER = "CHOOSED-TOWER";

let initialState = {
  cards: [
    {
      city: "London",
      degrees: 11,
      street: "Broken Cluds",
      humidity: 91,
      wind: 1,
    },
    {
      city: "New York",
      degrees: 12,
      street: "Broken Cluds",
      humidity: 92,
      wind: 2,
    },
    {
      city: "Moscow",
      degrees: 13,
      street: "Broken Cluds",
      humidity: 93,
      wind: 3,
    },
    {
      city: "Minsk",
      degrees: 14,
      street: "Broken Cluds",
      humidity: 94,
      wind: 4,
    },
    {
      city: "Paris",
      degrees: 15,
      street: "Broken Cluds",
      humidity: 95,
      wind: 5,
    },
    // {
    //   city: 'Vena',
    //   degrees: 16,
    //   street: 'Broken Cluds',
    //   humidity: 96,
    //   wind: 6,
    // },
  ],
  card: {
    city: "City",
    degrees: 11,
    street: "Broken Cluds",
    humidity: 94,
    wind: 4,
  },
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSED_TOWER:
      const { city, degrees, street, humidity, wind } = action;

      return {
        ...state,
        card: { city, degrees, street, humidity, wind },
      };

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
