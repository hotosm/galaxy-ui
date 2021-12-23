import axios from 'axios';
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

const featureActionCount = (array, feature, action) => {
  let x = array.filter((i) => i["feature"] === feature && i["action"] === action);
  return x[0] ? x[0]["count"] : 0;
};

const DownloadFileLink = ({name, type}) => {
    const [fileData, setFileData] = useState("");

    useEffect(() => {
        async function fetchData() {
            const body = {
                "fromTimestamp": "2021-12-16T00:30:00.000",
                "toTimestamp": "2021-12-17T00:15:00.000",
                "osmUsernames": [name],
                "issueTypes": ["badgeom"],
                "outputType": type === "json" ? "geojson" : type
              }
            const { data } = await  axios.post(`${API_URL}/data-quality/user-reports`, body);
            setFileData(data)
        }
        fetchData(); 
    }, [name, type])

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
}

export const TableResults = ({data, headings}) => {

  if (data.length > 0) {
      return (
          <table className="table-fixed mt-5 mx-auto">
              <thead>
                  <tr>
                      {headings.map((i, n) => <th key={n} className="w-1/6 text-left font-bold text-xl px-7 py-4">{i}</th>)}
                  </tr>
              </thead>
              <tbody>
                  {data.map((i) => {
                      console.log(i)
                      return (
                      <tr key={i["userId"]}>
                          <td className="py-2 px-7 text-lg">
                              <a
                                href={`https://www.openstreetmap.org/user/${i["userName"]}`}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                              >
                                  {i["userName"]}
                              </a>
                          </td>
                          <td className="py-2 px-7 text-lg">{featureActionCount(i["stats"], "building", "create")}</td>
                          <td className="py-2 px-7 text-lg">{featureActionCount(i["stats"], "building", "modify")}</td>
                          <td className="py-2 px-7 text-lg">{featureActionCount(i["stats"], "highway", "create")}</td>
                          <td className="py-2 px-7 text-lg">{featureActionCount(i["stats"], "highway", "modify")}</td>
                          <td className="py-2 px-7 text-lg">
                              Download &nbsp;
                              <DownloadFileLink name={i["userName"]} type={"csv"}/>
                              /
                              <DownloadFileLink name={i["userName"]} type={"json"}/>
                          </td>
                      </tr>
                  )})}
              </tbody>
          </table>
      )
  } else {
      return (
          <div className="mx-auto text-center w-1/4 p-1 mt-5">
              <p className="text-lg">No data found!</p>
          </div>
      );
  }
};
