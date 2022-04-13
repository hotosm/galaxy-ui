import { FormattedMessage } from "react-intl";
import messages from "../messages";
import { DownloadDataCell } from "./mapathonResults";

export const MapathonDetailedTableHeaders = [
  {
    accessor: "username",
    Header: <FormattedMessage {...messages.Mapper} />,
  },
  {
    accessor: "addedBuildings",
    Header: <FormattedMessage {...messages.AddedBuildings} />,
  },
  {
    accessor: "modifiedBuildings",
    Header: <FormattedMessage {...messages.ModifiedBuildings} />,
  },
  {
    accessor: "createdHighways",
    Header: <FormattedMessage {...messages.AddedHighways} />,
  },
  {
    accessor: "mappedTasks",
    Header: <FormattedMessage {...messages.MappedTasks} />,
  },
  {
    accessor: "validatedTasks",
    Header: <FormattedMessage {...messages.ValidatedTasks} />,
  },
  {
    accessor: "timeSpentMapping",
    Header: <FormattedMessage {...messages.TimeSpentMapping} />,
    Cell: ({ cell: { value } }) => value.toLocaleString(),
  },
  {
    accessor: "timeSpentValidating",
    Header: <FormattedMessage {...messages.TimeSpentValidating} />,
    Cell: ({ cell: { value } }) => value.toLocaleString(),
  },
  {
    id: "userId",
    accessor: "username",
    Header: <FormattedMessage {...messages.DataQualityIssues} />,
    Cell: ({ cell: { value } }) => <DownloadDataCell value={value} />,
    disableSortBy: true,
    defaultCanSort: false,
  },
];
