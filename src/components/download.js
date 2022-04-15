/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useDownloadFile } from "../hooks/useDownloadFile";
import { MapathonContext } from "../context/mapathonContext";
import { UserGroupContext } from "../context/userGroupContext";

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
  const { formData } = useContext(
    source === "mapathon" ? MapathonContext : UserGroupContext
  );
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