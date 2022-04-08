import React, { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
// import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
// import { aggregateUserData } from "../../utils/mapathonDataUtils";
import messages from "../messages";
import { MapathonContext } from "../../context/mapathonContext";
import { DownloadFileLink } from "../downloadLink";
import { Error } from "../formResponses";
import { MapathonErrorMessage } from "./mapathonError";
import { MapathonDetailedTableHeaders } from "./constants";
import { useSelector } from "react-redux";

const FeatureList = ({ title, features }) => {
  return (
    <div className="w-auto">
      <h2 className="text-2xl py-2 font-bold">{title}:</h2>
      {features && features.length > 0 ? (
        <ul>
          {features &&
            features.map((item, n) => (
              <li key={n}>
                <p className="text-xl">
                  {item.feature}: {item.count}
                </p>
              </li>
            ))}
        </ul>
      ) : (
        <p>
          <FormattedMessage {...messages.mapathonSummaryZeroFeatures} />
        </p>
      )}
    </div>
  );
};

export const MapathonSummaryResults = ({ data }) => {
  const intl = useIntl();
  const { mappedFeatures, totalContributors } = data;

  return (
    <div className="flex flex-col place-items-center mt-5 w-3/4 mx-auto">
      {/* {totalContributors && ( */}
      <div className="p-4">
        <h3 className="text-2xl">
          <FormattedMessage {...messages.mapathonSummaryContributors} />
          <span className="font-semibold text-2xl">: {totalContributors}</span>
        </h3>
      </div>
      {/* )} */}
      {mappedFeatures && (
        <div className="flex justify-between w-1/2">
          <FeatureList
            title={intl.formatMessage(messages.mapathonSummaryCreatedFeatures)}
            features={mappedFeatures.filter((f) => f.action === "create")}
          />
          <FeatureList
            title={intl.formatMessage(messages.mapathonSummaryModifiedFeatures)}
            features={mappedFeatures.filter((f) => f.action === "modify")}
          />
        </div>
      )}
    </div>
  );
};
const MAPATHON_DETAILED_COLUMN_HEADINGS = [
  { title: "Mapper" },
  { title: "AddedBuildings" },
  { title: "ModifiedBuildings" },
  { title: "AddedHighways" },
  { title: "MappedTasks" },
  { title: "ValidatedTasks" },
  { title: "TimeSpentMapping" },
  { title: "TimeSpentValidating" },
  { title: "DataQualityIssues" },
];

// export const MapathonDetailedResults = ({ data }) => {
//   console.log(aggregateUserData(data));
//   const { mappedFeatures, contributors } = data;
//   const { formData } = useContext(MapathonContext);
//   const [downloadError, setDownloadError] = useState(null);

//   if (mappedFeatures.length > 0 && contributors.length > 0) {
//     return (
//       <>
//         {downloadError && (
//           <Error>
//             <MapathonErrorMessage error={downloadError} />
//           </Error>
//         )}
//         <table className="table-fixed mt-5 mx-auto">
//           <thead>
//             <tr>
//               {MAPATHON_DETAILED_COLUMN_HEADINGS.map((i, n) => {
//                 return (
//                   <th
//                     key={n}
//                     className="w-1/12 text-left font-bold text-xl px-7 py-4"
//                   >
//                     <FormattedMessage {...messages[i.title]} />
//                   </th>
//                 );
//               })}
//             </tr>
//           </thead>
//           <tbody>
//             {aggregateUserData(data).map((i) => (
//               <tr key={i["userId"]}>
//                 <td className="py-2 px-7 text-lg">
//                   <NavLink
//                     to={{
//                       pathname: `https://www.openstreetmap.org/user/${i["username"]}`,
//                     }}
//                     target="_blank"
//                     className="hover:underline"
//                   >
//                     {i["username"]}
//                   </NavLink>
//                 </td>
//                 <td className="py-2 px-7 text-lg">{i["addedBuildings"]}</td>
//                 <td className="py-2 px-7 text-lg">{i["modifiedBuildings"]}</td>
//                 <td className="py-2 px-7 text-lg">{i["createdHighways"]}</td>
//                 <td className="py-2 px-7 text-lg">{i["mappedTasks"]}</td>
//                 <td className="py-2 px-7 text-lg">{i["validatedTasks"]}</td>
//                 <td className="py-2 px-7 text-lg">{i["timeSpentMapping"]}</td>
//                 <td className="py-2 px-7 text-lg">
//                   {i["timeSpentValidating"]}
//                 </td>
//                 <td className="py-2 px-7 text-lg">
//                   Download &nbsp;
//                   <DownloadFileLink
//                     username={i["username"]}
//                     type={"csv"}
//                     startDate={formData.startDate}
//                     endDate={formData.endDate}
//                     setDownloadError={setDownloadError}
//                   />
//                   /
//                   <DownloadFileLink
//                     username={i["username"]}
//                     type={"json"}
//                     startDate={formData.startDate}
//                     endDate={formData.endDate}
//                     setDownloadError={setDownloadError}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     );
//   } else {
//     return (
//       <div className="mx-auto text-center w-1/4 p-1 mt-5">
//         <p className="text-lg">
//           <FormattedMessage {...messages.noDataFound} />
//         </p>
//       </div>
//     );
//   }
// };

export const DownloadDataCell = ({ value }) => {
  const { formData } = useContext(MapathonContext);
  // const [downloadError, setDownloadError] = useState(null);

  return (
    <>
      Download &nbsp;
      <DownloadFileLink
        username={value}
        type={"csv"}
        startDate={formData.startDate}
        endDate={formData.endDate}
        // setDownloadError={setDownloadError}
      />
      /
      <DownloadFileLink
        username={value}
        type={"geojson"}
        startDate={formData.startDate}
        endDate={formData.endDate}
        // setDownloadError={setDownloadError}
      />
    </>
  );
};

export function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const downloadError = useSelector((state) => state.mapathon.downloadError);

  // Render the UI for your table
  if (data.length > 0) {
    return (
      <>
        {downloadError && (
          <Error>
            <MapathonErrorMessage error={downloadError} />
          </Error>
        )}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="w-1/12 text-left font-bold text-xl px-7 py-4"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="py-2 px-7 text-lg"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <div className="mx-auto text-center w-1/4 p-1 mt-5">
        <p className="text-lg">
          <FormattedMessage {...messages.noDataFound} />
        </p>
      </div>
    );
  }
}

// export const TableResults = ({ data }) => {
//     const { mappedFeatures, contributors } = data;
//     const { formData } = useContext(MapathonContext);
//     const [downloadError, setDownloadError] = useState(null);

//     console.log(aggregateUserData(data));

//     if (mappedFeatures.length > 0 && contributors.length > 0) {
//       return (
//         <>
//           {downloadError && (
//             <Error>
//               <MapathonErrorMessage error={downloadError} />
//             </Error>
//           )}
//           <table className="table-fixed mt-5 mx-auto">
//             <thead>
//               <tr>
//                 {MAPATHON_DETAILED_COLUMN_HEADINGS.map((i, n) => {
//                   return (
//                     <th
//                       key={n}
//                       className="w-1/12 text-left font-bold text-xl px-7 py-4"
//                     >
//                       <FormattedMessage {...messages[i.title]} />
//                     </th>
//                   );
//                 })}
//               </tr>
//             </thead>
//             <tbody>
//               {aggregateUserData(data).map((i) => (
//                 <tr key={i["userId"]}>
//                   <td className="py-2 px-7 text-lg">
//                     <NavLink
//                       to={{
//                         pathname: `https://www.openstreetmap.org/user/${i["username"]}`,
//                       }}
//                       target="_blank"
//                       className="hover:underline"
//                     >
//                       {i["username"]}
//                     </NavLink>
//                   </td>
//                   <td className="py-2 px-7 text-lg">{i["addedBuildings"]}</td>
//                   <td className="py-2 px-7 text-lg">{i["modifiedBuildings"]}</td>
//                   <td className="py-2 px-7 text-lg">{i["createdHighways"]}</td>
//                   <td className="py-2 px-7 text-lg">{i["mappedTasks"]}</td>
//                   <td className="py-2 px-7 text-lg">{i["validatedTasks"]}</td>
//                   <td className="py-2 px-7 text-lg">{i["timeSpentMapping"]}</td>
//                   <td className="py-2 px-7 text-lg">
//                     {i["timeSpentValidating"]}
//                   </td>
//                   <td className="py-2 px-7 text-lg">
//                     Download &nbsp;
//                     <DownloadFileLink
//                       username={i["username"]}
//                       type={"csv"}
//                       startDate={formData.startDate}
//                       endDate={formData.endDate}
//                       setDownloadError={setDownloadError}
//                     />
//                     /
//                     <DownloadFileLink
//                       username={i["username"]}
//                       type={"json"}
//                       startDate={formData.startDate}
//                       endDate={formData.endDate}
//                       setDownloadError={setDownloadError}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//         </table>
//       </>
//     );
//   } else {
//     return (
//       <div className="mx-auto text-center w-1/4 p-1 mt-5">
//         <p className="text-lg">
//           <FormattedMessage {...messages.noDataFound} />
//         </p>
//       </div>
//     );
//   }
// };
