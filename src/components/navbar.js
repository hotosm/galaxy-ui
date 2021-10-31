import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link, NavLink } from "react-router-dom";
import { useQuery } from 'react-query';
import messages from "./messages";
import logo from '../assets/img/hot-logo.svg';
import { getLoginURL } from "../queries/index";
import { Authorisation } from "./auth";
import { createPopup } from "../utils/popup";

export function NavBar(props) {
  const { data, refetch } = useQuery('loginUrl', getLoginURL, { enabled: false, });

  useEffect(() => {
    if (data) {
      createPopup(data.url);
    }
  });

  return (
    <nav className="flex items-center justify-between flex-wrap"> 
      <Link to={'/'} className="flex items-center flex-shrink-0 text-blue-dark mr-8 ml-3">
        <img src={logo} alt="logo" className="w-14 h-14 mr-2"/>
        <h2 className="font-semibold text-2xl">
          <FormattedMessage {...messages.appHeading}/>
        </h2>
      </Link>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mx-12">
        <div className="text-xl uppercase lg:flex-grow">
          <NavLink
            to="/explore"
            activeStyle={{
              textDecoration: "underline"
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark mr-8"
          >
            <FormattedMessage {...messages.exploreData} />
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              textDecoration: "underline"
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark"
          >
            <FormattedMessage {...messages.about} />
          </NavLink>
        </div>
      </div>
      <Authorisation login={refetch}/>
    </nav>
  )
};
