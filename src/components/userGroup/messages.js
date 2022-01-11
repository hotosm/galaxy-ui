import { defineMessages } from "react-intl";

export default defineMessages({
  StartDate: {
    id: 'reports.user.group.form.input.startDate',
    defaultMessage: "Start Date"
  },
  EndDate: {
    id: 'reports.user.group.form.input.endDate',
    defaultMessage: "End Date"
  },
 Hashtags: {
    id: 'reports.user.group.form.input.hashtags',
    defaultMessage: "Mapathon Hashtags"
  },
  HashtagsPlaceholder: {
    id: 'reports.user.group.form.hashtags.placeholder',
    defaultMessage: "Enter the hashtags separated by commas"
  },
  UsersToTrack: {
    id: 'reports.user.group.form.input.users',
    defaultMessage: 'OpenStreetMap Users to Track'
  },
  UsernamesPlaceholder: {
    id: 'reports.user.group.form.input.users.placeholder',
    defaultMessage: 'username-1, username-2, ... upto 50 usernames'
  },
  Submit: {
    id: 'reports.user.group.form.button.submit',
    defaultMessage: 'Submit Your Query'
  },
  userGroupErrorEmptyField: {
    id: 'reports.user.group.form.error.empty',
    defaultMessage: "Please fill in the {users} field to continue."
},
  ServerError: {
    id: 'reports.mapathon.summary.form.error.server',
    defaultMessage: "There was a problem with the server - ({error}) while executing this query. Please try again later."
  },
  Mapper: {
    id: 'reports.mapathon.detailed.column.mapper',
    defaultMessage: 'Mapper'
  },
  CreatedBuildings: {
    id: 'reports.mapathon.detailed.column.buildingsAdded',
    defaultMessage: 'Buildings Created'
  },
  ModifiedBuildings: {
    id: 'reports.mapathon.detailed.column.buildingsModified',
    defaultMessage: 'Buildings Modified'
  },
  CreatedHighways: {
    id: 'reports.mapathon.detailed.column.highwaysAdded',
    defaultMessage: 'Highways Created'
  },
  ModifiedHighways: {
    id: 'reports.mapathon.detailed.column.tasksMapped',
    defaultMessage: 'Highways Modified'
  },
  DataQualityIssues: {
    id: 'reports.mapathon.detailed.column.validatedTasks',
    defaultMessage: 'Data Quality Issues'
  },
})
