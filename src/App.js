import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
 import Header from "./components/header";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import { MapathonSummaryReport } from "./views/MapathonReport";

function App(){
  return (
    <Router>
      <Header />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Reports}/>
        <Route path="/mapathon-summary-report" component={MapathonSummaryReport}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
