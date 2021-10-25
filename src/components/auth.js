import React,  { useEffect, useState }  from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router";
import { useQuery } from 'react-query';
import { useHistory } from "react-router";
import { getLoginURL } from "../queries/index";
import { Button } from "../components/button";
import { createPopup } from "../utils/popup";
import { setToken, setLoggedIn, removeToken, setAuthOrigin } from "../features/auth/authorisationSlice";

export const LoginCallback = ({ location }) => {
  const authOrigin = useSelector((state) => state.auth.authOrigin);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const redirectUrl = authOrigin === "login" ? "/" : "mapathon-report/detailed";

  useEffect(() => {
    const code = (location.search.match(/code=([^&]+)/) || [])[1];
    const state = (location.search.match(/state=([^&]+)/) || [])[1];
    let callbackUrl = `http://127.0.0.1:8000/auth/callback/?code=${code}&state=${state}`;
    axios.get(callbackUrl)
      .then((res) => {
        setRedirect(true);
        dispatch(setToken(res.data));
        dispatch(setLoggedIn(true));
      })
      .catch(console.error);
  },);

  return (
  <>
    {redirect && (
      <Redirect to={redirectUrl} />
    )}
  </>
  );
};

export const Authorisation = (props) => {
  const { origin } = props;
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, refetch } = useQuery('loginUrl', getLoginURL, { enabled: false, });
  const buttonStyles = origin === "mapathon" ? "underline text-red text-lg" : "text-xl uppercase p-2 mr-1";
  const divStyles = origin === "mapathon" ? "text-center mt-4" : "";

  const handleClick = () => {
    switch(origin) {
      case 'mapathon':
        if (loggedIn) {
          history.push("/mapathon-report/detailed")
      } else {
          refetch();
          dispatch(setAuthOrigin("mapathon"))
      }
        break;
      case 'login':
      default:
        if (!loggedIn) {
          refetch(); 
          dispatch(setAuthOrigin("login"));
        } else {
          dispatch(setLoggedIn(false));
          dispatch(removeToken());
        }
    } 
  }

  useEffect(() => {
    if (data) {
      createPopup(data.url);
    }
  });

  return (
    <div className={divStyles}>
      <Button
        styles={buttonStyles}
        onClick={handleClick}
      >
        {origin === 'mapathon' && (
          loggedIn ? (
          <p>View detailed report &gt;&gt;</p>
          ) : (
            <p>Sign in to view detailed report &gt;&gt;</p>
          )
        )}
        {origin === 'login' && (
          !loggedIn ? 
          "Login with OSM ID" 
          : 
          "Logout"
        )}
      </Button>
    </div>
  )
};
