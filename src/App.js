import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';

function App(props) {
  return (
    <div className="App">
      <HeaderContainer />
      <Main />
    </div>
  );
}

export default App;
