export const featureActionCount = (array, feature, action) => {
  let x = array.filter(
    (i) => i["feature"] === feature && i["action"] === action
  );
  return x[0] ? x[0]["count"] : 0;
};

export const aggregateUserGroupData = (obj) => {
  const arr = [];
  obj.forEach((i) => {
    arr.push({
      ...i,
      createdBuildings: featureActionCount(i["stats"], "building", "create"),
      modifiedBuildings: featureActionCount(i["stats"], "building", "modify"),
      createdHighways: featureActionCount(i["stats"], "highway", "create"),
      modifiedHighways: featureActionCount(i["stats"], "highway", "modify"),
    });
  });
  return arr;
};
