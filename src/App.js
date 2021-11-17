import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import Header from "./components/nav/header";
import { LoginCallback } from "./components/auth";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import { MapathonSummaryReport, MapathonDetailedReport } from "./views/MapathonReports";
import { UserGroupReport } from "./views/UserGroupReport";

function App(){
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/authorised" component={LoginCallback} />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Reports}/>
          <Route path="/mapathon-report/summary" component={MapathonSummaryReport}/>
          <Route path="/mapathon-report/detailed" component={MapathonDetailedReport} />
          <Route path="/user-report" component={UserGroupReport} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
