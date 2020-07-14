import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search";
import Results from "./results";
import "./CSS/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
