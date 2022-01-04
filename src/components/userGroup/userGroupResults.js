import React from "react";
import { DownloadFileLink } from '../downloadLink';

const featureActionCount = (array, feature, action) => {
  let x = array.filter((i) => i["feature"] === feature && i["action"] === action);
  return x[0] ? x[0]["count"] : 0;
};

export const UserGroupResults = ({data, headings, formData}) => {
  if (data.length > 0) {
      return (
          <table className="table-fixed mt-5 mx-auto">
              <thead>
                  <tr>
                      {headings.map((i, n) => (
                        <th key={n} className="w-1/6 text-left font-bold text-xl px-7 py-4">{i}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {data.map((i) => {
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
                                <DownloadFileLink
                                    username={i["userName"]} 
                                    type={"csv"} 
                                    startDate={formData.startDate}
                                    endDate={formData.endDate}
                                />
                                /
                                <DownloadFileLink
                                    username={i["userName"]}
                                    type={"json"} 
                                    startDate={formData.startDate}
                                    endDate={formData.endDate}
                                />
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
