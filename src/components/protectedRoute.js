import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

// A wrapper for <Route> for protected routes
export function ProtectedRoute({ children, ...rest }) {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const token = useSelector((state) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={() =>
        token && loggedIn ? (
          children
        ) : (
          <div className="text-center overflow-hidden p-4 mt-4">
            <p className="text-red text-xl">
              <FormattedMessage {...messages.unauthorised} />
            </p>
          </div>
        )
      }
    />
  );
}
