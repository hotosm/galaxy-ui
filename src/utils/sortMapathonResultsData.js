const featureActionCount = (array, feature, action, name) => {
  let x = array.filter(
    (i) =>
      i["feature"] === feature &&
      i["action"] === action &&
      i["username"] === name
  );
  return x[0] ? x[0]["count"] : 0;
};

export const sortUserData = (obj) => {
  const arr = [];
  obj.contributors.forEach((i) => {
      arr.push({
          ...i,
          addedBuildings: featureActionCount(obj.mappedFeatures, "building", "create", i["username"]),
          modifiedBuildings: featureActionCount(obj.mappedFeatures, "building", "modify", i["username"]),
          createdHighways: featureActionCount(obj.mappedFeatures, "highway", "create", i["username"])
      })
  })
  return arr;
};
