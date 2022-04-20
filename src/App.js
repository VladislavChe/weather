import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route, Routes } from "react-router";
import MainContainer from "./components/Main/MainContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />

      <main className={"main"}>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route path="main" element={<MainContainer />} />
            <Route path="login" element={<LoginContainer />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
