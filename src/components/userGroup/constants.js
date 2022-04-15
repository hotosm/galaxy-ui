import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { DownloadDataCell } from "../download";

export const UserGroupColumnHeadings = [
  {
    accessor: "userName",
    Header: <FormattedMessage {...messages.Mapper} />,
    Cell: ({ cell: { value } }) => {
      return (
        <a
          href={`https://www.openstreetmap.org/user/${value}`}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {value}
        </a>
      );
    },
  },
  {
    accessor: "createdBuildings",
    Header: <FormattedMessage {...messages.CreatedBuildings} />,
  },
  {
    accessor: "modifiedBuildings",
    Header: <FormattedMessage {...messages.ModifiedBuildings} />,
  },
  {
    accessor: "createdHighways",
    Header: <FormattedMessage {...messages.CreatedHighways} />,
  },
  {
    accessor: "modifiedHighways",
    Header: <FormattedMessage {...messages.ModifiedHighways} />,
  },
  {
    id: "userId",
    accessor: "userName",
    Header: <FormattedMessage {...messages.DataQualityIssues} />,
    Cell: ({ cell: { value } }) => (
      <DownloadDataCell value={value} source="userGroup" />
    ),
    disableSortBy: true,
    defaultCanSort: false,
  },
];

export const UserGroupReportCSVHeaders = [
  {
    key: "userName",
    label: "Mapper",
  },
  {
    key: "createdBuildings",
    label: "Created Buildings",
  },
  {
    key: "modifiedBuildings",
    label: "Modified Buildings",
  },
  {
    key: "createdHighways",
    label: "Added Highways",
  },
  {
    key: "modifiedHighways",
    label: "Modified Highways",
  },
];
