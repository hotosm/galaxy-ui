import logo from "./logo.svg";
import "./App.css";

import axios from "./axios";

import { BrowserRouter, HashRouter, Route, withRouter } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./componenet/Layout/Layout";
import LiveEvents from "./container/LiveEvents/LiveEvents";
import OrgContribution from "./container/OrgContribution";

function App() {

  return (
    <div className="App">
      <header>
        <h1>OSM Insights</h1>
        <p>It is all about OSM</p>
      </header>

      <HashRouter>
          <Layout>
            <Suspense fallback="Loading">
            <Route path="/live-events" render={(props)=> <LiveEvents {...props} />} ></Route>
            <Route path="/org-contribution" render={(props)=> <OrgContribution {...props} />} ></Route>
            
            </Suspense>
           

          </Layout>
        </HashRouter>
    </div>
  );
}

export default withRouter(App);
