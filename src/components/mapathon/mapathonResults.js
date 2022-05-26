import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import messages from "../messages";
import { Error } from "../formResponses";
import { MapathonErrorMessage } from "./mapathonError";
import {
  QuestionIcon,
  SortDownIcon,
  SortIcon,
  SortUpIcon,
} from "../../assets/svgIcons";
import { DownloadCSVButton } from "../download";
import { Tooltip } from "../tooltip";

export const FeatureList = ({ title, features }) => {
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

export function MapathonDetailedResultsTable({ columns, data }) {
  const intl = useIntl();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const downloadError = useSelector((state) => state.mapathon.downloadError);

  if (data.length > 0) {
    return (
      <>
        {downloadError && (
          <Error>
            <MapathonErrorMessage error={downloadError} />
          </Error>
        )}
        <DownloadCSVButton data={data} source={"mapathon"} />
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto"></div>
              <table {...getTableProps()} className="min-w-full border">
                <thead className="border-b">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => {
                        const tooltipKeys = [
                          "timeSpentMapping",
                          "timeSpentValidating",
                          "validatedTasks",
                          "mappedTasks",
                        ];
                        let showTooltip = tooltipKeys.includes(column.id);
                        return (
                          <th
                            scope="col"
                            className="text-lg font-semibold px-6 py-4 text-left"
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            <span className="inline ">
                              {column.render("Header")} &nbsp;
                              {showTooltip ? (
                                <Tooltip
                                  position={"top center"}
                                  content={intl.formatMessage(
                                    messages.mapathonTooltip
                                  )}
                                >
                                  <QuestionIcon className="w-3 h-3 text-red" />
                                </Tooltip>
                              ) : (
                                ""
                              )}
                              {column.canSort &&
                                (column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <SortDownIcon className="w-3 h-3 ml-1 inline text-blue-grey" />
                                  ) : (
                                    <SortUpIcon className="w-3 h-3 ml-1 inline text-blue-grey" />
                                  )
                                ) : (
                                  <SortIcon className="w-3 h-3 ml-1 inline text-blue-grey" />
                                ))}
                            </span>
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className="border-b">
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="text-lg font-light px-6 py-4 whitespace-nowrap"
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
            </div>
          </div>
        </div>
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
