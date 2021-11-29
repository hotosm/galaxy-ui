import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

export function Footer() {
    return (
        <footer className="text-center text-xl m-5 pt-5">
            <span className="p-1 text-blue-dark">
                <FormattedMessage
                    {...messages.footerOrganisation}
                    values={{
                        OrganisationLink: (
                        <a href="https://www.hotosm.org/" className="text-red">
                            Humanitarian OpenStreetMap Team
                        </a>
                        ),
                    }}
                />
            </span>
            <span className="text-blue-dark">
                <FormattedMessage
                    {...messages.footerContact}
                    values={{
                        GithubLink: (
                            <a className="text-red" href="https://github.com/hotosm"> 
                            Github 
                            </a>  
                        ),
                        SlackLink: (
                            <a className="text-red" href="http://slack.hotosm.org/"> 
                            Slack
                            </a>
                        )
                    }}
                />
            </span>   
        </footer>
    )
}
