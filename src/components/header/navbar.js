import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import messages from "./messages";

export function NavBar() {
    return (
        <ul>
          <li>
            <Link to="/">
                <FormattedMessage {...messages.home} />
            </Link>
          </li>
          <li>
            <Link to="/reports">
                <FormattedMessage {...messages.exploreData} />
            </Link>
          </li>
        </ul>
    )
}