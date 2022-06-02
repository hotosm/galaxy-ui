import React from "react";
import { Card } from "../components/card";
import messages from "./messages";

export function Reports() {
  return (
    <div className="flex flex-col  mt-2 mx-auto">
      <div className="flex flex-col sm:flex-row sm:px-24 justify-evenly h-96 sm:h-72 items-center  my-4">
        <div className="w-full md:w-5/12 h-full bg-mapathon-image bg-cover" />
        <div className="h-full w-full md:w-1/2">
          <Card
            label={messages.mapathonReport}
            summary={messages.mapathonReportBlurb}
            route={"/mapathon-report/summary"}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:px-24 justify-evenly h-96 sm:h-72 items-center  my-4">
        {/* image div */}
        <div className="border w-full md:w-5/12 h-full" />
        <div className="h-full w-full md:w-1/2">
          <Card
            label={messages.userReport}
            summary={messages.userReportBlurb}
            route={"/user-report"}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:px-24 justify-evenly h-96 sm:h-72 items-center  my-4">
        {/* image div */}
        <div className="border w-full md:w-5/12 h-full" />
        <div className="h-full w-full md:w-1/2">
          <Card
            label={messages.organisationReport}
            summary={messages.organisationReportBlurb}
            route={"/organisation-report"}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:px-24 justify-evenly h-96 sm:h-72 items-center  my-4">
        {/* image div */}
        <div className="border w-full md:w-5/12 h-full" />
        <div className="h-full w-full md:w-1/2">
          <Card
            label={messages.countryReport}
            summary={messages.countryReportBlurb}
            route={"/country-report"}
          />
        </div>
      </div>
    </div>
  );
}
