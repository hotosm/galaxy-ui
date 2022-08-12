import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { MapathonReportForm } from "../components/mapathon/mapathonReportForm";
import {
  getMapathonSummaryReport,
  getMapathonDetailedReport,
} from "../queries/index";
import {
  MapathonSummaryResults,
  MapathonDetailedResultsTable,
} from "../components/mapathon/mapathonResults";
import { MapathonRedirectButton } from "../components/auth";
import { setTriggerSubmit } from "../features/form/formSlice";
import { MiniNavBar } from "../components/nav/navbar";
import { aggregateMapathonUserData } from "../utils/mapathonDataUtils";
import { MapathonDetailedTableHeaders } from "../components/mapathon/constants";

const MAPATHON_PAGES = [
  { pageTitle: "Mapathon Summary Report", pageURL: "/mapathon-report/summary" },
  {
    pageTitle: "Mapathon Detailed Report",
    pageURL: "/mapathon-report/detailed",
  },
];

export const MapathonSummaryReport = (props) => {
  const dispatch = useDispatch();
  const { mutate, data, isLoading, error } = useMutation(
    getMapathonSummaryReport
  );

  const triggeredSubmit = () => {
    dispatch(setTriggerSubmit(true));
  };
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
      <div className="text-center mt-4">
        <MapathonRedirectButton triggerFn={triggeredSubmit} />
      </div>
      {data && <MapathonSummaryResults data={data} />}
    </div>
  );
};

export const MapathonDetailedReport = () => {
  const { mutate, data, isLoading, error } = useMutation(
    getMapathonDetailedReport,
    {}
  );
  const triggeredLoading = useSelector((state) => state.mapathon.isLoading);

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
        loading={isLoading || triggeredLoading}
      />
      {data && (
        <MapathonDetailedResultsTable
          data={aggregateMapathonUserData(data)}
          columns={MapathonDetailedTableHeaders}
        />
      )}
    </div>
  );
};
