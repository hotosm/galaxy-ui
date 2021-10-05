import React from "react";
import { FormattedMessage } from "react-intl";

import messages from "./messages";
import { NavBar } from "./navbar";

const Header = () => {
    return (
        <div className="App">
        <header>
          <h1 className="text-3xl"><FormattedMessage {...messages.appHeading}/></h1>
          <NavBar />
          <hr/>
        </header>
      </div>
    )
}

export default Header;