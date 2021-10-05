import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import messages from "./messages";

export function NavBar() {
    return (
        <ul>
          <li className="inline-block mr-6">
            <Link to="/">
                <FormattedMessage {...messages.home} />
            </Link>
          </li>
          <li className="inline-block mr-6">
            <Link to="/explore">
                <FormattedMessage {...messages.exploreData} />
            </Link>
          </li>
        </ul>
    )
}