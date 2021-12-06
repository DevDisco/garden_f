import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Garden from "./components/garden/Garden";
import "./App.css";

export default function App() {
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
