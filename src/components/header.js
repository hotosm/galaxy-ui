import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import messages from "./messages";
import { NavBar } from "./navbar";

const Header = () => {
  return (
    <div>
      <header>
        <div className="p-4 flex justify-between text-red text-lg">
          <span><FormattedMessage {...messages.tagline} /></span>
          <Link to={{ pathname:"https://www.hotosm.org"}} target="_blank">
            www.hotosm.org
          </Link>
        </div>
        <hr/>
        <NavBar />
      </header>
    </div>
  )
}

export default Header;
