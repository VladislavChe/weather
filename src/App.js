import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <div className="App">
      <HeaderContainer />
      <main className={"main"}>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
