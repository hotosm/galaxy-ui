import React from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { FormattedMessage } from "react-intl";
import ReactPlaceholder from "react-placeholder";
import messages from "./messages";
import { Error } from "../formResponses";
import { UserGroupErrorMessage } from "./userGroupError";
import {
  SortDownIcon,
  SortIcon,
  SortUpIcon,
  SpinnerIcon,
} from "../../assets/svgIcons";
import { DownloadCSVButton } from "../download";
import { InfoCard } from "../card";
import "react-placeholder/lib/reactPlaceholder.css";

export function UserGroupResultsTable({
  columns,
  data,
  userDataCheck,
  loading,
  lastUpdateTime,
}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const downloadError = useSelector((state) => state.mapathon.downloadError);

  if (userDataCheck) {
    return (
      <>
        {downloadError && (
          <Error>
            <UserGroupErrorMessage error={downloadError} />
          </Error>
        )}
        <div className="flex flex-col">
          <ReactPlaceholder
            showLoadingAnimation
            ready={rows.length > 0}
            type="text"
            rows={8}
            className="mt-20 mx-4"
          >
            <div className="w-11/12 mx-auto flex justify-between">
              <InfoCard info={lastUpdateTime} styles={"my-4"} />
              <DownloadCSVButton data={data} source={"userGroup"} />
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto" />
                <table {...getTableProps()} className="w-11/12 mx-auto border">
                  <thead className="border-b">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            scope="col"
                            className="text-xl font-semibold p-4 text-center"
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            <span className="inline ">
                              {column.render("Header")} &nbsp;
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
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()} className="border-b" key={i}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                className="text-lg font-light p-4 text-center whitespace-nowrap"
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
                {loading ? (
                  <div className="text-center w-11/12 mx-auto">
                    <SpinnerIcon className="animate-spin w-5 h-5 mt-2 inline text-red" />
                  </div>
                ) : (
                  <div className="bg-tan w-11/12 text-center mx-auto">
                    End of Table
                  </div>
                )}
              </div>
            </div>
          </ReactPlaceholder>
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
