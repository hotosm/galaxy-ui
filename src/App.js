import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
 import Header from "./components/header";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";

function App(){
  return (
    <Router>
      <Header />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Reports}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
