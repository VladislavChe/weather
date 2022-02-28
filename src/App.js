import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
