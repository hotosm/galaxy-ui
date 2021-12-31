import axios from 'axios';
import React, { useCallback, useEffect, useState } from "react";
import { API_URL } from "../config";

export const DownloadFileLink = ({name, type, formData}) => {
  const { startDate, endDate } = formData;
  const [fileData, setFileData] = useState("");

  const fetchFile = useCallback(async () => {
        const body = {
            "fromTimestamp": startDate,
            "toTimestamp": endDate,
            "osmUsernames": [name],
            "issueTypes": ["badgeom"],
            "outputType": type === "json" ? "geojson" : type
          }
        const { data } = await  axios.post(`${API_URL}/data-quality/user-reports`, body);
        setFileData(data);
  }, [endDate, name, startDate, type])

  useEffect(() => {
    fetchFile();
  }, [fetchFile])

  return (
      <a
          href={type === "csv" ? `data:text/csv;charset=utf-8,${escape(fileData)}` :
          "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fileData))}
          download={`${name}.${type}`}
          className="underline text-red"
      >
          {type === 'csv' ? <span>CSV</span> : <span>JSON</span>}
      </a>
  )
};
