import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
 import Header from "./components/header";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import { MapathonSummaryReport } from "./views/MapathonReport";
import { LoginCallback } from "./components/auth";

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
          <Route path="/mapathon-summary-report" component={MapathonSummaryReport}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
