export const aggregateUserGroupData = (obj) => {
  const arr = [];
  obj.forEach((i) => {
    arr.push({
      ...i,
      createdBuildings: i["stats"][0]["addedBuildings"],
      modifiedBuildings: i["stats"][0]["modifiedBuildings"],
      createdHighways: i["stats"][0]["addedHighway"],
      modifiedHighways: i["stats"][0]["modifiedHighway"],
    });
  });
  return arr;
};
