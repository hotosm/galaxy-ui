import React,  { useEffect, useState }  from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setToken, setLoggedIn, removeToken } from "../features/auth/authorisationSlice";
import { Button } from "./button";

export const Authorisation = (props) => {
  const { refetch } = props;
  const token = useSelector((state) => state.auth.accessToken);
  const loggedIn = useSelector((state) => state.auth.loggedIn)
  console.log(loggedIn)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(setLoggedIn(true));
  //     dispatch(setToken(token));
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      {!loggedIn ? (
        <div>
          <Button
            styles="text-xl uppercase p-2 mr-1"
            onClick={() => {
              if (!loggedIn) {
                // refetch();
                dispatch(setLoggedIn(true));
                dispatch(setToken());
              }
            }}
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
      
      {/* <div>
        <AuthButtons 
          redirectTo={window.location.pathname}
        />
      </div> */}
    </>
  )

}