import React from "react";
import { Card } from "../components/card";
import messages from "./messages";

export function Reports() {
    return (
        <div className="flex flex-col h-screen mt-2 mx-auto">
            <div className="flex justify-evenly h-72 items-center flex-wrap my-4">
                <div className="w-5/12 h-full bg-mapathon-image bg-cover" />
                <div className="h-full w-1/2">
                    <Card 
                        label={messages.mapathonReport}
                        summary={messages.mapathonReportBlurb}
                        route={"/mapathon-summary-report"}
                    />
                </div>
            </div>
            <div className="flex justify-evenly h-72 items-center flex-wrap my-4">
                {/* image div */}
                <div className="border h-full w-5/12"/>
                <div className="h-full w-1/2">
                    <Card
                        label={messages.userReport}
                        summary={messages.userReportBlurb}
                        route={"/user-report"}
                    />
                </div>
            </div>
            <div className="flex justify-evenly h-72 items-center flex-wrap my-4">
                {/* image div */}
                <div className="border h-full w-5/12"/>
                <div className="h-full w-1/2">
                    <Card 
                        label={messages.organisationReport} 
                        summary={messages.organisationReportBlurb}
                        route={"/organisation-report"}
                    />
                </div>
            </div>
            <div className="flex justify-evenly h-72 items-center flex-wrap my-4">
                {/* image div */}
                <div className="border h-full w-5/12"/>
                <div className="h-full w-1/2">
                    <Card
                        label={messages.countryReport}
                        summary={messages.countryReportBlurb}
                        route={"/country-report"}
                    />
                </div>  
            </div>
        </div>
    )
}
