import React from "react";
import { useHistory } from "react-router";
import { FormattedMessage } from "react-intl";

import { Button } from "./button";
import messages from './messages';

export function Banner() {
    let history = useHistory()
    const handleClick = () => {
        history.push("/reports")
    }

    return (
        <>
            <main className="w-3/5 h-auto mx-auto my-auto p-4 space-y-14 flex flex-col place-items-center">    
                <div className="w-1/2 mt-2">
                    <h2 className="font-bold text-3xl text-center">
                        <FormattedMessage {...messages.galaxyTagline} />
                    </h2>
                </div>
                <div className="w-3/4 text-2xl text-center">
                    <p>
                        <FormattedMessage {...messages.galaxySummary} />
                    </p>
                </div>
                <div className="w-1/7 text-base text-2xl">
                    <Button onClick={handleClick} styles={"bg-red text-white py-2 px-4"}>
                        <FormattedMessage {...messages.exploreButton} />
                    </Button>
                </div>
            </main>
        </> 
    )
};
