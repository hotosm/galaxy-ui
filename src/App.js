import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ProtectedRoute } from "./components/protectedRoute";
import { MATOMO_ID } from "./config";
import { FormContextProvider } from "./context/formContext";
import { TrackingBanner } from "./components/banner";
import Header from "./components/nav/header";
import { LoginCallback } from "./components/auth";
import { FallbackComponent } from "./components/fallback";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { Reports } from "./views/Reports";
import {
  MapathonSummaryReport,
  MapathonDetailedReport,
} from "./views/MapathonReports";
import { UserGroupReport } from "./views/UserGroupReport";
import { NotFoundPage } from "./views/NotFound";

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Router>
        <Header />
        <div>
          <FormContextProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/authorised" component={LoginCallback} />
              <Route path="/about" component={About} />
              <Route path="/explore" component={Reports} />
              <Route
                path="/mapathon-report/summary"
                component={MapathonSummaryReport}
              />
              <ProtectedRoute path={"/mapathon-report/detailed"}>
                <MapathonDetailedReport />
              </ProtectedRoute>
              <ProtectedRoute exact path={"/user-report"}>
                <UserGroupReport />
              </ProtectedRoute>
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </FormContextProvider>
        </div>
      </Router>
      {MATOMO_ID && <TrackingBanner />}
    </ErrorBoundary>
  );
}

export default App;
