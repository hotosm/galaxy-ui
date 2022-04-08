import { FormattedMessage, useIntl } from "react-intl";
import messages from "../messages";
import { DownloadDataCell } from "./mapathonResults";

export const MapathonDetailedTableHeaders = [
  { accessor: "username", Header: <FormattedMessage {...messages.Mapper} /> },
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
  },
  {
    accessor: "timeSpentValidating",
    Header: <FormattedMessage {...messages.TimeSpentValidating} />,
  },
  {
    id: "userId",
    accessor: "username",
    Header: <FormattedMessage {...messages.DataQualityIssues} />,
    Cell: ({ cell: { value } }) => <DownloadDataCell value={value} />,
  },
];
