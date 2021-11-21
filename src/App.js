import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Garden from "./components/pages/Garden";
import GardenJson from "./components/pages/GardenJson";

function App() {
  return (
    <>
      <Router basename="/westzaan/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/garden" component={Garden} />
          <Route path="/gardenjson" component={GardenJson} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
