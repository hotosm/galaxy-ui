import React from "react";
import { useHistory } from "react-router";
import { FormattedMessage } from "react-intl";

import { Button } from "./button";
import messages from './messages'

export function Banner() {
    let history = useHistory()
    const handleClick = () => {
        history.push("/explore")
    }
    return (
        <div className="h-screen">
            <main className="w-full h-full my-2 py-40 space-y-12 flex flex-col place-items-center bg-banner-image bg-contain">    
                <div class="w-1/3 mt-10">
                    <h2 className="font-bold text-xl text-center">
                        <FormattedMessage {...messages.galaxyTagline} />
                    </h2>
                </div>
                <div class="w-1/3 text-lg text-center">
                    <p>
                        <FormattedMessage {...messages.galaxySummary} />
                    </p>
                </div>
                <div class="w-1/7 text-base">
                    <Button onClick={handleClick}>
                        <FormattedMessage {...messages.exploreButton} />
                    </Button>
                </div>
            </main>
        </div> 
    )
};
