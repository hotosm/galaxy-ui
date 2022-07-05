export const validMapathonDetailResponse1 = {
  mappedFeatures: [
    {
      feature: "building",
      action: "create",
      count: 749,
      username: "user1",
    },
    {
      feature: "building",
      action: "modify",
      count: 8,
      username: "user1",
    },
  ],
  contributors: [
    {
      userId: 1001,
      username: "user1",
      totalBuildings: 757,
      editors: "JOSM/1.5 (18427 en),",
    },
  ],
  tmStats: [
    {
      tasksMapped: [
        {
          userId: 1001,
          tasksMapped: 3,
        },
      ],
      tasksValidated: [
        {
          userId: 1001,
          tasksValidated: 75,
        },
      ],
      timeSpentMapping: [
        {
          userId: 1001,
          timeSpentMapping: 677.0,
        },
      ],
      timeSpentValidating: [
        {
          userId: 1001,
          timeSpentValidating: 29208.0,
        },
      ],
    },
  ],
};

export const validMapathonDetailResponse2 = {
  mappedFeatures: [
    {
      feature: "building",
      action: "create",
      count: 749,
      username: "user1",
    },
    {
      feature: "building",
      action: "modify",
      count: 8,
      username: "user1",
    },
  ],
  contributors: [
    {
      userId: 1001,
      username: "user1",
      totalBuildings: 757,
      editors: "JOSM/1.5 (18427 en),",
    },
  ],
  tmStats: [
    {
      tasksMapped: [],
      tasksValidated: [],
      timeSpentMapping: [],
      timeSpentValidating: [],
    },
  ],
};

export const validUserGroupData1 = [
  {
    userId: 1001,
    username: "user1",
    stats: [
      {
        addedBuildings: 1180,
        modifiedBuildings: 0,
        addedHighway: 16,
        modifiedHighway: 11,
        addedHighwayMeters: 35955.05053289406,
        modifiedHighwayMeters: 42539.38543911992,
      },
    ],
  },
];
