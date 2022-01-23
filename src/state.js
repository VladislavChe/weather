let store = {
  state: {
    cards: [
      {
        city: 'London',
        degrees: 11,
        street: 'Broken Cluds',
        humidity: 94,
        wind: 4,
      },
      {
        city: 'New York',
        degrees: 15,
        street: 'Broken Cluds',
        humidity: 95,
        wind: 5,
      },
      {
        city: 'Moscow',
        degrees: 16,
        street: 'Broken Cluds',
        humidity: 96,
        wind: 6,
      },
      {
        city: 'Minsk',
        degrees: 17,
        street: 'Broken Cluds',
        humidity: 97,
        wind: 7,
      },
      {
        city: 'Paris',
        degrees: 18,
        street: 'Broken Cluds',
        humidity: 98,
        wind: 8,
      },
    ],
    choosedCity: 'test2',
  },
  card: {
    degrees: 11,
    city: '',
    humidity: 94,
    wind: 4,
  },
  getState() {
    return store.state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  choosedTower(tower) {
    store.state.choosedCity = tower;
    store._callSubscriber(store.state);
  },
  subscribe(observer) {
    store._callSubscriber = observer;
  },
};
export default store;
window.store = store;
