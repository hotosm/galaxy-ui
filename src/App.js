import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
 import Header from "./components/header";
import { About } from "./views/About";
import { Home } from "./views/Home";

function App(){
  return (
    <Router>
      <Header />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  )
}

export default App;
