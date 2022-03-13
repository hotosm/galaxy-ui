import React from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { MapathonReportForm } from "../components/mapathon/mapathonReportForm";
import {
  getMapathonSummaryReport,
  getMapathonDetailedReport,
} from "../queries/index";
import {
  MapathonSummaryResults,
  MapathonDetailedResults,
} from "../components/mapathon/mapathonResults";
import { AuthorisationButton } from "../components/auth";
import { MiniNavBar } from "../components/nav/navbar";
import messages from "./messages";

const MAPATHON_PAGES = [
  { pageTitle: "Mapathon Summary Report", pageURL: "/mapathon-report/summary" },
  {
    pageTitle: "Mapathon Detailed Report",
    pageURL: "/mapathon-report/detailed",
  },
];

export const MapathonSummaryReport = (props) => {
  const { mutate, data, isLoading, error } = useMutation(
    getMapathonSummaryReport
  );
  return (
    <div>
      <MiniNavBar pages={MAPATHON_PAGES} />
      <MapathonReportForm
        error={
          error
            ? error.response.status === 500
              ? error.response.data
              : error.response.data.detail[0]["msg"]
            : ""
        }
        fetch={mutate}
        loading={isLoading}
      />
      <AuthorisationButton
        origin={"mapathon"}
        redirectTo={props.location.pathname}
      />
      {isLoading && (
        <div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>
      )}
      {data && <MapathonSummaryResults data={data} />}
    </div>
  );
};

export const MapathonDetailedReport = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const token = useSelector((state) => state.auth.accessToken);

  const { mutate, data, isLoading, error } = useMutation(
    getMapathonDetailedReport,
    {}
  );

  if (token && loggedIn) {
    return (
      <div>
        <MiniNavBar pages={MAPATHON_PAGES} />
        <MapathonReportForm
          error={
            error
              ? error.response.status === 500
                ? error.response.data
                : error.response.data.detail[0]["msg"]
              : ""
          }
          fetch={mutate}
          loading={isLoading}
        />
        {isLoading && (
          <div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>
        )}
        {data && <MapathonDetailedResults data={data} />}
      </div>
    );
  } else {
    return (
      <>
        <MiniNavBar pages={MAPATHON_PAGES} />
        <div className="text-center mt-4">
          <p className="text-red text-xl">
            <FormattedMessage
              {...messages.mapathonDetailedReportUnauthorised}
            />
          </p>
        </div>
      </>
    );
  }
};
