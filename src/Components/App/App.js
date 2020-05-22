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
          <Route path="/add">
            <div className="tabWrapper">
              <Tabs />
              <Form />
            </div>
          </Route>
          <Route path="/tag">
            <div className="tabWrapper">
              <Tabs />
              <div className="wrapper">
                <p> its coming </p>
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="tabWrapper">
              <Tabs />
              <Dictionary />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
