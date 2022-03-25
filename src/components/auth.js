import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
import { FormattedMessage } from "react-intl";
import { Button } from "../components/button";
import { createLoginWindow } from "../utils/authUtils";
import {
  setToken,
  setLoggedIn,
  removeToken,
} from "../features/auth/authorisationSlice";
import messages from "./messages";

export const LoginCallback = ({ location }) => {
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const [isReadyToRedirect, setIsReadyToRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const code = params.get("code");
    if (code !== null) {
      window.opener.authComplete(code);
      window.close();
      return;
    }
    const access_token = params.get("access_token");
    dispatch(setToken(access_token));
    dispatch(setLoggedIn(true));
    setIsReadyToRedirect(true);
  }, [dispatch, params]);

  const redirectUrl = params.get("redirect_to");

  return <>{isReadyToRedirect && <Redirect to={redirectUrl} noThrow />}</>;
};

export const AuthorisationButton = ({ redirectTo, origin }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const buttonStyles =
    origin === "nav" ? "text-xl uppercase p-2 mr-1" : "underline lowercase";

  const handleClick = () => {
    if (!loggedIn) {
      createLoginWindow(redirectTo);
    } else {
      dispatch(setLoggedIn(false));
      dispatch(removeToken());
    }
  };

  return (
    <>
      <Button styles={buttonStyles} onClick={handleClick}>
        {origin === "nav" &&
          (!loggedIn ? (
            <FormattedMessage {...messages.navBarLogin} />
          ) : (
            <FormattedMessage {...messages.logOut} />
          ))}
        {origin === "other" && (
          <FormattedMessage {...messages.protectedRouteLogin} />
        )}
      </Button>
    </>
  );
};

export const MapathonRedirectButton = ({ triggerFn }) => {
  const history = useHistory();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const buttonStyles = "underline text-red text-lg";

  const handleClick = () => {
    if (loggedIn) {
      history.push("/mapathon-report/detailed");
    } else {
      createLoginWindow("/mapathon-report/detailed");
    }
    triggerFn();
  };

  return (
    <>
      <Button styles={buttonStyles} onClick={handleClick}>
        {!loggedIn ? (
          <p>
            <FormattedMessage {...messages.detailedReportSignIn} /> &gt;&gt;
          </p>
        ) : (
          <p>
            <FormattedMessage {...messages.viewDetailedReport} /> &gt;&gt;
          </p>
        )}
      </Button>
    </>
  );
};
