import {
  convertStringToArray,
  convertStringToNumberArray,
} from "../formatInputs";

describe("convert string to array function tests", () => {
  let str = "";
  test("empty string", () => {
    expect(convertStringToArray(str)).toEqual([]);
  });
  test("non-comma-separated string", () => {
    str = "hello world";
    expect(convertStringToArray(str)).toEqual(["hello world"]);
  });
  test("multiple words comma separated  string", () => {
    str = "hello, OSM, world";
    expect(convertStringToArray(str)).toEqual(["hello", "OSM", "world"]);
  });
  test("string starting with #", () => {
    str = "#hello, #OSM, #world";
    expect(convertStringToArray(str)).toEqual(["hello", "OSM", "world"]);
  });
});

describe("convert string to number array function tests", () => {
  let str = "";
  test("empty string", () => {
    expect(convertStringToNumberArray(str)).toEqual([]);
  });
  test("non-comma-separated string", () => {
    str = "2022";
    expect(convertStringToNumberArray(str)).toEqual([2022]);
  });
  test("multiple numbers comma separated string", () => {
    str = "10, 11, 12";
    expect(convertStringToNumberArray(str)).toEqual([10, 11, 12]);
  });
  test("alphanumeric string", () => {
    str = "forty five";
    expect(convertStringToNumberArray(str)).toEqual([NaN]);
  });
  test("floats", () => {
    str = "10.89";
    expect(convertStringToNumberArray(str)).toEqual([10.89]);
  });
});
