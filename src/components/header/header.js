import React from "react";
import { FormattedMessage } from "react-intl";

import messages from "./messages";

const Header = () => {
    return (
        <div className="App">
        <header>
          <h1><FormattedMessage {...messages.appHeading}/></h1>
          <p><FormattedMessage {...messages.appSubHeading}/></p>
        </header>
      </div>
    )
}

export default Header;