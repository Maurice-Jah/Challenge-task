import React from "react";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Containers/Header";
import StateListing from "./Containers/StateListing";
import StateDetail from "./Containers/StateDetail";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<StateListing />}></Route>
        <Route exact path="/state/:stateId" element={<StateDetail />}></Route>
        <Route> 404 Not Found!</Route>
      </Routes>
    </div>
  );
};

export default App;
