import React from "react";
import "./App.css";
import Title from "../Title";
import Form from "../Form/index";
import Dictionary from "../Dictionary";
import Tabs from "../Tabs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/add">
            <Form />
          </Route>
          <Route path="/tag">
            <p> its coming </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
