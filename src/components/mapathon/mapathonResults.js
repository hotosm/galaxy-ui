import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import { sortUserData } from "../../utils/sortMapathonResultsData";
import messages from "../messages";

const FeatureList = ({ title, features }) => {
  return (
    <div className="w-auto">
      <h2 className="text-2xl py-2">{title}:</h2>
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
const MAPATHON_DETAILED_COLUMN_HEADINGS= [
    { title: "Mapper" }, 
    { title: "AddedBuildings" }, 
    { title: "ModifiedBuildings" }, 
    { title: "AddedHighways" }, 
    { title: "MappedTasks" },
    { title: "ValidatedTasks" }
];


export const MapathonDetailedResults = ({data}) => {
    const { mappedFeatures, contributors } = data
    if (mappedFeatures.length > 0 && contributors.length > 0) {
        return (
            <table className="table-fixed mt-5 mx-auto">
                <thead>
                    <tr>
                        {MAPATHON_DETAILED_COLUMN_HEADINGS.map((i, n) => {
                            return(
                                <th 
                                    key={n} 
                                    className="w-1/6 text-left font-normal text-xl px-7 py-4"
                                >
                                    <FormattedMessage {...messages[i.title]} />
                                </th> 
                            )}
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sortUserData(data).map((i) => (
                        <tr key={i["userId"]}>
                            <td className="py-2 px-7 text-lg">
                                <NavLink
                                to={{ pathname:`https://www.openstreetmap.org/user/${i["username"]}`}}
                                target="_blank"
                                className="hover:underline"
                                >
                                    {i["username"]}
                                </NavLink>
                            </td>
                            <td className="py-2 px-7 text-lg">{i["addedBuildings"]}</td>
                            <td className="py-2 px-7 text-lg">{i["modifiedBuildings"]}</td>
                            <td className="py-2 px-7 text-lg">{i["createdHighways"]}</td>
                            <td className="py-2 px-7 text-lg">{i["mappedTasks"]}</td>
                            <td className="py-2 px-7 text-lg">{i["validatedTasks"]}</td>
                        </tr>
                    ))}
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
