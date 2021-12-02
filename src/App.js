import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Garden from "./components/pages/Garden";

function App() {
  return (
    <>
      <Router basename={process.env.REACT_APP_ROOT_DIR}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/garden" component={Garden} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
