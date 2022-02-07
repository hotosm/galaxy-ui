import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../messages";
import { NavBar } from "./navbar";

const Header = () => {
  return (
    <div>
      <header>
        <div className="p-4 flex justify-between text-red text-lg">
          <span>
            <FormattedMessage {...messages.tagline} />
          </span>
          <a href="https://www.hotosm.org" rel="noreferrer" target="_blank">
            www.hotosm.org
          </a>
        </div>
        <hr />
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
