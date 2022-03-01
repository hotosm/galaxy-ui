const featureActionCount = (array, feature, action, name) => {
  let x = array.filter(
    (i) =>
      i["feature"] === feature &&
      i["action"] === action &&
      i["username"] === name
  );
  return x[0] ? x[0]["count"] : 0;
};

const filterUserTMStats = (arr, id) => {
  return arr.filter((i) => i["userId"] === id);
};

export const aggregateUserData = (obj) => {
  const arr = [];
  let tasksMappedStats = obj.tmStats[0]["tasksMapped"];
  let tasksValidatedStats = obj.tmStats[0]["tasksValidated"];
  let timeSpentMappingStats = obj.tmStats[0]["timeSpentMapping"];
  let timeSpentValidatingStats = obj.tmStats[0]["timeSpentValidating"];

  const nullCheck =
    tasksMappedStats.length === 0 &&
    tasksValidatedStats.length === 0 &&
    timeSpentMappingStats.length === 0 &&
    timeSpentValidatingStats.length === 0;

  obj.contributors.forEach((i) => {
    let userTasksMapped = filterUserTMStats(tasksMappedStats, i["userId"]);
    let userTasksValidated = filterUserTMStats(
      tasksValidatedStats,
      i["userId"]
    );
    let userTimeSpentMapping = filterUserTMStats(
      timeSpentMappingStats,
      i["userId"]
    );
    let userTimeSpentValidating = filterUserTMStats(
      timeSpentValidatingStats,
      i["userId"]
    );

    arr.push({
      ...i,
      addedBuildings: featureActionCount(
        obj.mappedFeatures,
        "building",
        "create",
        i["username"]
      ),
      modifiedBuildings: featureActionCount(
        obj.mappedFeatures,
        "building",
        "modify",
        i["username"]
      ),
      createdHighways: featureActionCount(
        obj.mappedFeatures,
        "highway",
        "create",
        i["username"]
      ),
      mappedTasks: nullCheck
        ? "N/A"
        : userTasksMapped.length > 0
        ? userTasksMapped[0]["tasksMapped"]
        : 0,
      validatedTasks: nullCheck
        ? "N/A"
        : userTasksValidated.length > 0
        ? userTasksValidated[0]["tasksValidated"]
        : 0,
      timeSpentMapping: nullCheck
        ? "N/A"
        : userTimeSpentMapping.length > 0
        ? userTimeSpentMapping[0]["timeSpentMapping"]
        : 0.0,
      timeSpentValidating: nullCheck
        ? "N/A"
        : userTimeSpentValidating.length > 0
        ? userTimeSpentValidating[0]["timeSpentValidating"]
        : 0.0,
    });
  });
  return arr;
};
