import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import messages from "./messages";
import logo from '../assets/img/hot-logo.svg'

export function NavBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap p-1 mx-4">
      <Link to={'/'} className="flex items-center flex-shrink-0 text-blue-dark mr-8">
        <img src={logo} alt="logo" className="w-14 h-14 mr-2"/>
        <h2 className="font-semibold text-xl">
          <FormattedMessage {...messages.appHeading}/>
        </h2>
      </Link>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mx-12">
        <div class="text-base uppercase lg:flex-grow">
          <Link to="/explore" className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark mr-8 active:underline">
            <FormattedMessage {...messages.exploreData} />
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-dark active:underline ">
            <FormattedMessage {...messages.about} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
