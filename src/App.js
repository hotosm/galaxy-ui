import React from "react";
import {
  HashRouter,
  Switch,
  Route
 } from "react-router-dom";
 import Header from "./components/header";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import { MapathonSummaryReport } from "./views/MapathonReport";

function App(){
  return (
    <HashRouter>
      <Header />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Reports}/>
        <Route path="/mapathon-summary-report" component={MapathonSummaryReport}/>
      </Switch>
    </div>
    </HashRouter>
  )
}

export default App;
