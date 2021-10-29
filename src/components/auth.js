import React,  { useEffect, useState }  from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router";

import { setToken, setLoggedIn, removeToken } from "../features/auth/authorisationSlice";
import { Button } from "./button";

export const LoginCallback = ({ location }) => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const code = (location.search.match(/code=([^&]+)/) || [])[1];
    const state = (location.search.match(/state=([^&]+)/) || [])[1];
    let callbackUrl = `http://127.0.0.1:8000/auth/callback/?$code=${code}&state=${state}`;
    axios.get(callbackUrl)
      .then((res) => {
        setRedirect(true);
        dispatch(setToken(res.data));
        dispatch(setLoggedIn(true));
      })
      .catch(console.error);
  },);

  return (
  <p>
    {redirect && (
      <Redirect to="/" />
    )}
  </p>
  );
};

export const Authorisation = (props) => {
  const { login } = props;
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {!loggedIn ? (
        <div>
          <Button
            styles="text-xl uppercase p-2 mr-1"
            onClick={() => { if (!loggedIn) login(); }}
          >
            Login with OSM ID
          </Button>
        </div>
      ): (
        <div>
          <Button
            styles="text-xl uppercase p-2 mr-1"
            onClick={() => {
              dispatch(setLoggedIn(false));
              dispatch(removeToken())
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </>
  )
}