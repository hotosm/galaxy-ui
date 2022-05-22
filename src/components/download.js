/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import { API_URL } from "../config";
import { useDownloadFile } from "../hooks/useDownloadFile";
import { FormContext } from "../context/formContext";
import { MapathonReportCSVHeaders } from "./mapathon/constants";
import { UserGroupReportCSVHeaders } from "./userGroup/constants";

export const DownloadFileLink = ({ username, type, startDate, endDate }) => {
  const fetchFile = () => {
    const body = {
      fromTimestamp: startDate,
      toTimestamp: endDate,
      osmUsernames: [username],
      issueTypes: ["badgeom"],
      outputType: type,
    };
    return axios.post(`${API_URL}/data-quality/user-reports`, body);
  };

  const getFileName = () => {
    return `${username}.${type}`;
  };

  const { ref, fileData, download, fileName } = useDownloadFile({
    fetchFile,
    getFileName,
  });

  return (
    <>
      <a
        href={
          type === "csv"
            ? `data:text/csv;charset=utf-8,${escape(fileData)}`
            : "data:application/geo+json;charset=utf-8," +
              encodeURIComponent(JSON.stringify(fileData))
        }
        download={fileName}
        className="hidden"
        ref={ref}
      />
      <button
        name="user-quality-btn "
        onClick={download}
        className="underline text-red"
      >
        {type === "csv" ? "CSV" : "JSON"}
      </button>
    </>
  );
};

export const DownloadDataCell = ({ value, source }) => {
  const { mapathonFormData, userGroupFormData } = useContext(FormContext);
  const formData =
    source === "mapathon"
      ? mapathonFormData
      : source === "userGroup"
      ? userGroupFormData
      : [];

  return (
    <>
      Download &nbsp;
      <DownloadFileLink
        username={value}
        type={"csv"}
        startDate={formData.startDate}
        endDate={formData.endDate}
      />
      /
      <DownloadFileLink
        username={value}
        type={"geojson"}
        startDate={formData.startDate}
        endDate={formData.endDate}
      />
    </>
  );
};

export const DownloadCSVButton = ({ data, source }) => {
  const { mapathonFormData, userGroupFormData } = useContext(FormContext);
  const formData =
    source === "mapathon"
      ? mapathonFormData
      : source === "userGroup"
      ? userGroupFormData
      : [];

  const headers =
    source === "mapathon"
      ? MapathonReportCSVHeaders
      : source === "userGroup"
      ? UserGroupReportCSVHeaders
      : [];

  const csvDateRange = `${format(formData.startDate, "dd/MM/yyyy")} - ${format(
    formData.endDate,
    "dd/MM/yyyy"
  )}`;

  return (
    <div
      className={`text-right text-lg ${source === "mapathon" ? "m-4" : "my-4"}`}
    >
      <CSVLink
        data={data}
        headers={headers}
        filename={`${csvDateRange} ${source} Report.csv`}
        className="bg-blue-grey text-white py-2 px-4"
        target="_blank"
      >
        Download CSV
      </CSVLink>
    </div>
  );
};
