import { defineMessages } from "react-intl";

export default defineMessages({
  appHeading: {
    id: "header.heading",
    defaultMessage: "OSM Galaxy",
  },
  about: {
    id: "navbar.about",
    defaultMessage: "About",
  },
  exploreData: {
    id: "navbar.exploreData",
    defaultMessage: "Explore Data",
  },
  tagline: {
    id: "header.tagline",
    defaultMessage: "Mapping our world together",
  },
  privacyPolicy: {
    id: "banner.tracking.privacyPolicy",
    defaultMessage: "privacy policy",
  },
  aboutInfoCollected: {
    id: "banner.tracking.information.collected",
    defaultMessage: "About the information we collect",
  },
  trackingBannerText: {
    id: "banner.tracking.text",
    defaultMessage:
      'We use cookies and similar technologies to recognise and analyse your visits, and measure traffic usage and activity. You can learn about how we use the data about your visit or information you provide reading our {link}. By clicking "I Agree", you consent to the use of cookies.',
  },
  disagree: {
    id: "banner.tracking.button.disagree",
    defaultMessage: "I Do Not Agree",
  },
  agree: {
    id: "banner.tracking.button.agree",
    defaultMessage: "I Agree",
  },
  galaxyTagline: {
    id: "home.galaxy.tagline",
    defaultMessage: "Access All OSM Data Outputs in One Portal",
  },
  galaxySummary: {
    id: "home.galaxy.summary",
    defaultMessage:
      "Galaxy is a work in progress project focused on bringing together all of the OSM data outputs under one umbrella so that the data is more available, accessible and ready to use for all kinds of users",
  },
  exploreButton: {
    id: "home.galaxy.explore.button",
    defaultMessage: "Start Exploring Data",
  },
  unauthorised: {
    id: "reports.unauthorised.section",
    defaultMessage: "Please {LogInButton} first to view this report.",
  },
  protectedRouteLogin: {
    id: "reports.unauthorised.button.login",
    defaultMessage: "log in",
  },
  navBarLogin: {
    id: "navbar.login",
    defaultMessage: "Login with OSM ID",
  },
  logOut: {
    id: "navbar.logout",
    defaultMessage: "Log Out",
  },
  mapathonSummaryContributors: {
    id: "reports.mapathon.summary.contributors",
    defaultMessage: "Total Unique Contributors",
  },
  mapathonSummaryCreatedFeatures: {
    id: "reports.mapathon.summary.created.features",
    defaultMessage: "Features Created",
  },
  mapathonSummaryModifiedFeatures: {
    id: "reports.mapathon.summary.modified.features",
    defaultMessage: "Features Modified",
  },
  mapathonSummaryZeroFeatures: {
    id: "reports.mapathon.summary.zero.features",
    defaultMessage: "None",
  },
  mapathonFormStartDate: {
    id: "reports.mapathon.summary.form.input.startDate",
    defaultMessage: "Start Date",
  },
  mapathonFormEndDate: {
    id: "reports.mapathon.summary.form.input.endDate",
    defaultMessage: "End Date",
  },
  mapathonFormProjectIds: {
    id: "reports.mapathon.summary.form.input.projectIds",
    defaultMessage: "Tasking Manager Project IDs",
  },
  mapathonFormIdsPlaceholder: {
    id: "reports.mapathon.summary.form.projectIds.placeholder",
    defaultMessage: "Enter the Tasking Manager Project IDs separated by commas",
  },
  mapathonFormHashtags: {
    id: "reports.mapathon.summary.form.input.hashtags",
    defaultMessage: "Mapathon Hashtags",
  },
  mapathonFormHashtagsPlaceholder: {
    id: "reports.mapathon.summary.form.hashtags.placeholder",
    defaultMessage: "Enter the hashtags separated by commas",
  },
  ErrorTitle: {
    id: "reports.mapathon.summary.form.error.title",
    defaultMessage: "It was not possible to run this query.",
  },
  mapathonFormErrorEmptyFields: {
    id: "reports.mapathon.summary.form.error.empty",
    defaultMessage: "Please fill in <b>one</b> of the following to continue",
  },
  mapathonFormErrorInvalidIds: {
    id: "reports.mapathon.summary.form.error.invalidIds",
    defaultMessage: "Please input numerical values for the TM Project IDs.",
  },
  mapathonFormErrorInvalidTime: {
    id: "reports.mapathon.summary.form.error.invalidTime",
    defaultMessage: "Time difference should be less than or equal to 24 hours.",
  },
  ServerError: {
    id: "reports.mapathon.summary.form.error.server",
    defaultMessage:
      "There was a problem with the server - ({error}) while executing this query. Please try again later.",
  },
  mapathonSubmitForm: {
    id: "reports.mapathon.form.submit.button",
    defaultMessage: "Submit Your Query",
  },
  detailedReportSignIn: {
    id: "reports.mapathon.summary.signin",
    defaultMessage: "Sign in to view detailed report",
  },
  viewDetailedReport: {
    id: "reports.mapathon.summary.button.view.detailedReport",
    defaultMessage: "View detailed report",
  },
  Mapper: {
    id: "reports.mapathon.detailed.column.mapper",
    defaultMessage: "Mapper",
  },
  AddedBuildings: {
    id: "reports.mapathon.detailed.column.buildingsAdded",
    defaultMessage: "Buildings Added",
  },
  ModifiedBuildings: {
    id: "reports.mapathon.detailed.column.buildingsModified",
    defaultMessage: "Buildings Modified",
  },
  AddedHighways: {
    id: "reports.mapathon.detailed.column.highwaysAdded",
    defaultMessage: "Highways Added",
  },
  MappedTasks: {
    id: "reports.mapathon.detailed.column.tasksMapped",
    defaultMessage: "Tasks Mapped",
  },
  ValidatedTasks: {
    id: "reports.mapathon.detailed.column.validatedTasks",
    defaultMessage: "Tasks Validated",
  },
  TimeSpentMapping: {
    id: "reports.mapathon.detailed.column.timeSpentMapping",
    defaultMessage: "Time Spent Mapping (s)",
  },
  TimeSpentValidating: {
    id: "reports.mapathon.detailed.column.timeSpentValidating",
    defaultMessage: "Time Spent Validating (s)",
  },
  Editors: {
    id: "reports.mapathon.detailed.column.editorsUsed",
    defaultMessage: "Editors used",
  },
  userId: {
    id: "reports.mapathon.detailed.column.userId",
    defaultMessage: "User Id",
  },
  TotalBuildings: {
    id: "reports.mapathon.detailed.column.buildings.total",
    defaultMessage: "Total number of buildings",
  },
  DataQualityIssues: {
    id: "reports.mapathon.detailed.column.dataQualityIssues",
    defaultMessage: "Data Quality Issues",
  },
  noDataFound: {
    id: "reports.mapathon.detailed.results.no.data",
    defaultMessage: "No Data Found!",
  },
  mapathonTooltip: {
    id: "reports.mapathon.detailed.stats.tooltip",
    defaultMessage:
      "The following statistics: tasks mapped, tasks validated, time spent mapping, and time spent validating are derived using either Tasking Manager project ids or Tasking Manager specific hashtags, e.g. hotosm-project-1.",
  },
  footerOrganisation: {
    id: "about.footer.organisation",
    defaultMessage: "This project is under development by {OrganisationLink}.",
  },
  footerContact: {
    id: "about.footer.contact",
    defaultMessage: "Reach out on {GithubLink} or {SlackLink}.",
  },
});
