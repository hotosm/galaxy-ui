import React from "react";
import { FormattedMessage } from "react-intl";
import { Link, NavLink } from "react-router-dom";
import messages from "../messages";
import logo from "../../assets/img/hot-logo.svg";
import { AuthorisationButton } from "../auth";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap">
      <Link
        to={"/"}
        className="flex items-center flex-shrink-0 text-blue-dark mr-8 ml-3"
      >
        <img src={logo} alt="HOT-logo" className="w-14 h-14 mr-2" />
        <h2 className="font-semibold text-2xl">
          <FormattedMessage {...messages.appHeading} />
        </h2>
      </Link>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mx-4">
        <div className="text-xl uppercase lg:flex-grow">
          <NavLink
            to="/explore"
            activeStyle={{
              borderBottom: "2px solid #2c3038",
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark mr-8 pb-1"
          >
            <FormattedMessage {...messages.exploreData} />
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              borderBottom: "2px solid #2c3038",
            }}
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark pb-1"
          >
            <FormattedMessage {...messages.about} />
          </NavLink>
        </div>
        <AuthorisationButton
          origin={"login"}
          redirectTo={window.location.pathname}
        />
      </div>
      <AuthorisationButton
        origin={"nav"}
        redirectTo={window.location.pathname}
      />
    </nav>
  );
}

export function MiniNavBar({ pages }) {
  return (
    <div className="w-1/3 py-2 text-center mx-auto text-lg bg-tan">
      {pages.map((i, n) => (
        <NavLink
          key={n}
          to={i["pageURL"]}
          activeStyle={{
            borderBottom: "1px solid #2c3038",
          }}
          className="block mx-3 py-1 lg:inline-block lg:mt-0 text-blue-dark"
        >
          {i["pageTitle"]}
        </NavLink>
      ))}
    </div>
  );
}
