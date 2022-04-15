import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedRoute";
import { MATOMO_ID } from "./config";
import { TrackingBanner } from "./components/banner";
import Header from "./components/nav/header";
import { LoginCallback } from "./components/auth";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import {
  MapathonSummaryReport,
  MapathonDetailedReport,
} from "./views/MapathonReports";
import { UserGroupReport } from "./views/UserGroupReport";
import { MapathonContextProvider } from "./context/mapathonContext";
import { UserGroupContextProvider } from "./context/userGroupContext";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/authorised" component={LoginCallback} />
            <Route path="/about" component={About} />
            <Route path="/explore" component={Reports} />
            <UserGroupContextProvider>
              <ProtectedRoute path={"/user-report"}>
                <UserGroupReport />
              </ProtectedRoute>
            </UserGroupContextProvider>
          </Switch>
          <Switch>
            <MapathonContextProvider>
              <Route
                path="/mapathon-report/summary"
                component={MapathonSummaryReport}
              />
              <ProtectedRoute path={"/mapathon-report/detailed"}>
                <MapathonDetailedReport />
              </ProtectedRoute>
            </MapathonContextProvider>
          </Switch>
        </div>
      </Router>
      {MATOMO_ID && <TrackingBanner />}
    </>
  );
}

export default App;
