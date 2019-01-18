import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import DisplayResult from "./DisplayResult";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search?q=:value" exact component={DisplayResult} />
        </Switch>
      </Router>
    );
  }
}

export default App;
