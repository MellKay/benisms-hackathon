
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "../Title";
    import Form from '../Form/index';
import Dictionary from "../Dictionary";
import Tabs from "../Tabs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route path="/">
            <div className="tabWrapper">
              <Tabs />
              <Dictionary />
      <Form />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
