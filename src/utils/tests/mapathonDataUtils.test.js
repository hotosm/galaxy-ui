import { aggregateMapathonUserData } from "../mapathonDataUtils";
import {
  validMapathonDetailResponse1,
  validMapathonDetailResponse2,
} from "./testData";

describe("aggregate mapathon user data function tests", () => {
  test("empty object argument gives empty response", () => {
    expect(aggregateMapathonUserData({})).toEqual();
  });

  test("no argument received gives empty response", () => {
    expect(aggregateMapathonUserData()).toEqual();
  });

  test("a mapathon data object with all stats received gives an aggregated result", () => {
    const expectedResult = [
      {
        addedBuildings: 749,
        createdHighways: 0,
        editors: "JOSM/1.5 (18427 en),",
        mappedTasks: 3,
        modifiedBuildings: 8,
        timeSpentMapping: 677,
        timeSpentValidating: 29208,
        totalBuildings: 757,
        userId: 1001,
        username: "user1",
        validatedTasks: 75,
      },
    ];
    expect(aggregateMapathonUserData(validMapathonDetailResponse1)).toEqual(
      expectedResult
    );
  });

  test("a mapathon data object with no TM statistics received shows N/A for them", () => {
    const expectedResult = [
      {
        addedBuildings: 749,
        createdHighways: 0,
        editors: "JOSM/1.5 (18427 en),",
        mappedTasks: "N/A",
        modifiedBuildings: 8,
        timeSpentMapping: "N/A",
        timeSpentValidating: "N/A",
        totalBuildings: 757,
        userId: 1001,
        username: "user1",
        validatedTasks: "N/A",
      },
    ];
    expect(aggregateMapathonUserData(validMapathonDetailResponse2)).toEqual(
      expectedResult
    );
  });
});
