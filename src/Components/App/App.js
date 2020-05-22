import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "../Title";
import Dictionary from "../Dictionary";
import Tabs from "../Tabs";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="tabWrapper">
        <Tabs />
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
