import React from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { Error } from "../formResponses";
import { UserGroupErrorMessage } from "./userGroupError";
import { SortDownIcon, SortIcon, SortUpIcon } from "../../assets/svgIcons";
import { DownloadCSVButton } from "../download";

export function UserGroupResultsTable({ columns, data, userDataCheck }) {
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
        <DownloadCSVButton data={data} source={"userGroup"} />
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto"></div>
              <table {...getTableProps()} className="min-w-full">
                <thead className="border-b">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="text-xl font-semibold px-6 py-4 text-left"
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
