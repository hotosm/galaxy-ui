import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
import { Button } from "../components/button";
import { createLoginWindow } from "../utils/authUtils";
import {
  setToken,
  setLoggedIn,
  removeToken,
} from "../features/auth/authorisationSlice";

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
  let history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const buttonStyles =
    origin === "mapathon"
      ? "underline text-red text-lg"
      : "text-xl uppercase py-3";
  const divStyles = origin === "mapathon" ? "text-center mt-4" : "";

  const handleClick = () => {
    switch (origin) {
      case "mapathon":
        if (loggedIn) {
          history.push("/mapathon-report/detailed");
        } else {
          createLoginWindow(redirectTo);
        }
        break;
      case "login":
      default:
        if (!loggedIn) {
          createLoginWindow(redirectTo);
        } else {
          dispatch(setLoggedIn(false));
          dispatch(removeToken());
        }
    }
  };

  return (
    <div className={divStyles}>
      <Button styles={buttonStyles} onClick={handleClick}>
        {origin === "mapathon" &&
          (loggedIn ? (
            <p>View detailed report &gt;&gt;</p>
          ) : (
            <p>Sign in to view detailed report &gt;&gt;</p>
          ))}
        {origin === "login" && (!loggedIn ? "Login with OSM ID" : "Logout")}
      </Button>
    </div>
  );
};
