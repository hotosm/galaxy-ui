import { defineMessages } from "react-intl";

export default defineMessages({
  StartDate: {
    id: "reports.user.group.form.input.startDate",
    defaultMessage: "Start Date",
  },
  EndDate: {
    id: "reports.user.group.form.input.endDate",
    defaultMessage: "End Date",
  },
  Hashtags: {
    id: "reports.user.group.form.input.hashtags",
    defaultMessage: "Mapathon Hashtags",
  },
  HashtagsPlaceholder: {
    id: "reports.user.group.form.hashtags.placeholder",
    defaultMessage: "Enter the hashtags separated by commas",
  },
  UsersToTrack: {
    id: "reports.user.group.form.input.users",
    defaultMessage: "OpenStreetMap Users to Track",
  },
  UsernamesPlaceholder: {
    id: "reports.user.group.form.input.users.placeholder",
    defaultMessage: "username-1, username-2, ... upto 50 usernames",
  },
  Submit: {
    id: "reports.user.group.form.button.submit",
    defaultMessage: "Submit Your Query",
  },
  userGroupErrorEmptyField: {
    id: "reports.user.group.form.error.empty",
    defaultMessage: "Please fill in the {users} field to continue.",
  },
  ServerError: {
    id: "reports.mapathon.summary.form.error.server",
    defaultMessage:
      "There was a problem with the server - ({error}) while executing this query. Please try again later.",
  },
  Mapper: {
    id: "reports.user.group.table.column.mapper",
    defaultMessage: "Mapper",
  },
  CreatedBuildings: {
    id: "reports.user.group.table.column.buildingsCreated",
    defaultMessage: "Buildings Created",
  },
  ModifiedBuildings: {
    id: "reports.user.group.table.column.buildingsModified",
    defaultMessage: "Buildings Modified",
  },
  CreatedHighways: {
    id: "reports.user.group.table.column.highwaysCreated",
    defaultMessage: "Highways Created",
  },
  ModifiedHighways: {
    id: "reports.user.group.table.column.highwaysModified",
    defaultMessage: "Highways Modified",
  },
  DataQualityIssues: {
    id: "reports.user.group.table.column.dataQualityIssues",
    defaultMessage: "Data Quality Issues",
  },
  noDataFound: {
    id: "reports.user.group.results.no.data",
    defaultMessage: "No Data Found!",
  },
});
