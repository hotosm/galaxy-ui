import React from "react";
import { FormattedMessage } from "react-intl";
import { Link, NavLink } from "react-router-dom";
import messages from "./messages";
import logo from '../assets/img/hot-logo.svg'

export function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-1 mx-4">
      <Link to={'/'} className="flex items-center flex-shrink-0 text-blue-dark mr-8">
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
    </nav>
  )
}
