import React from "react";
import "./App.css";
import Title from "../Title";
import Form from "../Form/index";
import Dictionary from "../Dictionary";
import Tabs from "../Tabs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tag from "../TAG/Tag";

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
              <Tag />
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
