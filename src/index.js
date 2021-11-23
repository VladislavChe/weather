import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './state';

let rerendeEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App cards={store.state.cards} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerendeEntireTree(store);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
