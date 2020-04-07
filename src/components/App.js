import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./Front";
import Navbar from "./Navbar";
import CountryInfo from "./CountryInfo";
import StatisticsContextProvider from "../contexts/StatisticsContext";

const App = () => {
  return (
    <StatisticsContextProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/countryInfo/:country" component={CountryInfo} />
        </Switch>
      </Router>
    </StatisticsContextProvider>
  );
};

export default App;
