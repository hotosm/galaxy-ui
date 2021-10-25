const featureActionCount = (array, feature, action, name) => {
  let x = array.filter((i) => i["feature"] === feature && i["action"] === action && i["username"]=== name);
  return x[0] ? x[0]["count"] : 0;
};

export const sortUserData = (obj) => {
  const arr = []
  obj.contributors.forEach((i) => {
      arr.push({
          ...i,
          modifiedBuildings: featureActionCount(obj.mappedFeatures, "building", "modify", i["username"]),
          createdHighways: featureActionCount(obj.mappedFeatures, "highway", "modify", i["username"])
      })
  })
  return arr;
};

export const sampleData = {
      "mappedFeatures": [
          {
              "feature": "highway",
              "action": "create",
              "count": 4,
              "username": "Test User"
          },
          {
              "feature": "water",
              "action": "create",
              "count": 4,
              "username": "Test User"
          },
          {
              "feature": "building",
              "action": "create",
              "count": 5,
              "username": "Test User2"
          },
          {
              "feature": "building",
              "action": "create",
              "count": 78,
              "username": "Test User"
          },
          {
              "feature": "building",
              "action": "modify",
              "count": 1,
              "username": "Test User2"
          },
          {
              "feature": "highway",
              "action": "modify",
              "count": 6,
              "username": "Test User"
          }
      ],
      "contributors": [
          {
              "userId": 1,
              "username": "Test User",
              "totalBuildings": 78,
              "mappedTasks": 0,
              "validatedTasks": 0,
              "editors": "JOSM/1.5 (18118 en),"
          },
          {
              "userId": 2,
              "username": "Test User2",
              "totalBuildings": 39,
              "mappedTasks": 10,
              "validatedTasks": 5,
              "editors": "ID"
          }
      ]
  }