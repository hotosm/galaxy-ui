import React from "react";

export function Footer() {
    return (
        <footer className="text-center text-xl m-5 pt-5">
            <span className="p-1 text-blue-dark">
                This project is under development by 
                <a className="text-red" href="https://www.hotosm.org/"> Humanitarian OpenStreetMap Team</a>.
            </span>
            <span className="text-blue-dark"> 
                Reach out on 
                <a className="text-red" href="https://github.com/hotosm"> Github </a> 
                or <a className="text-red" href="http://slack.hotosm.org/"> Slack.</a>
            </span>   
        </footer>
    )
}
