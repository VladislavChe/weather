import * as axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'http://api.openweathermap.org/',
  // headers: {
  //   'API-KEY': '5829ae54ffac0afcef6420da9ac6f2db',
  // },
});

export const API = {
  getCityName(city) {
    return instance
      .get(`geo/1.0/direct?q=${city}&limit=5&appid=5829ae54ffac0afcef6420da9ac6f2db`)
      .then((response) => response.data);
  },
  getCurrentCity(lat, lon) {
    return instance
      .get(`data/2.5/weather?lat=${lat}&lon=${lon}&appid=5829ae54ffac0afcef6420da9ac6f2db`)
      .then((response) => response.data);
  },
  testRequest() {
    return instance
      .get(`geo/1.0/direct?q=Moscow&limit=5&appid=5829ae54ffac0afcef6420da9ac6f2db`)
      .then((response) => response.data);
  },
};
