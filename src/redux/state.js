import mainBranchReducer from './main-branch';

let store = {
  _state: {
    mainBranch: {
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
        // {
        //   city: 'Vena',
        //   degrees: 16,
        //   street: 'Broken Cluds',
        //   humidity: 96,
        //   wind: 6,
        // },
      ],
      card: {
        city: 'City',
        degrees: 11,
        street: 'Broken Cluds',
        humidity: 94,
        wind: 4,
      },
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.mainBranch = mainBranchReducer(this._state.mainBranch, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
