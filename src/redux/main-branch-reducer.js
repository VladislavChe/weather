const CHOOSED_TOWER = 'CHOOSED-TOWER';

let initialState = {
  cards: [
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
  ],
  card: {
    city: 'City',
    degrees: 11,
    street: 'Broken Cluds',
    humidity: 94,
    wind: 4,
  },
};

const mainBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSED_TOWER:
      return {
        ...state,
        card: action.card,
      };

    default:
      return state;
  }
};

export const choosedTower = (card) => ({
  type: CHOOSED_TOWER,
  card: card,
});

export default mainBranchReducer;
