const CHOOSED_TOWER = 'CHOOSED-TOWER';
const UPDATE_NEW_SYMBOL_SEARCH = 'UPDATE_NEW_SYMBOL_SEARCH';
const ADD_FAVOURITE_LOCATIONS = 'ADD_FAVOURITE_LOCATIONS';

let initialState = {
  cards: [
    /*
    {
      city: 'London',
      degrees: 11,
      street: 'Broken Cluds',
      humidity: 91,
      wind: 1,
    },
    {
      city: 'New York',
      degrees: 12,
      street: 'Broken Cluds',
      humidity: 92,
      wind: 2,
    },
    {
      city: 'Moscow',
      degrees: 13,
      street: 'Broken Cluds',
      humidity: 93,
      wind: 3,
    },
    {
      city: 'Minsk',
      degrees: 14,
      street: 'Broken Cluds',
      humidity: 94,
      wind: 4,
    },
    {
      city: 'Paris',
      degrees: 15,
      street: 'Broken Cluds',
      humidity: 95,
      wind: 5,
    },
    */
  ],
  card: {
    city: 'City',
    degrees: 11,
    street: 'Broken Cluds',
    humidity: 94,
    wind: 4,
  },
  searchText: '',
  favouriteLocation: '12',
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSED_TOWER:
      return {
        ...state,
        card: action.card,
      };
    case UPDATE_NEW_SYMBOL_SEARCH:
      return {
        ...state,
        searchText: action.newSymbol,
      };
    case ADD_FAVOURITE_LOCATIONS:
      return {
        ...state,
        cards: action.location,
      };

    default:
      return state;
  }
};

export const choosedTower = (card) => ({
  type: CHOOSED_TOWER,
  card: card,
});

export const updateSearchSymbol = (newSymbol) => ({
  type: UPDATE_NEW_SYMBOL_SEARCH,
  newSymbol,
});
export const addFavouriteLocations = (location) => ({
  type: ADD_FAVOURITE_LOCATIONS,
  location,
});

export default mainBranchReducer;
