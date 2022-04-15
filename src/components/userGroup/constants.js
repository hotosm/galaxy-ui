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
      <DownloadDataCell value={value} source="usergroup" />
    ),
    disableSortBy: true,
    defaultCanSort: false,
  },
];
