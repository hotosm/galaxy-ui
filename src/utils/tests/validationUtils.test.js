import { add } from "date-fns";
import { validateDateDifference, validateNumberInput } from '../validationUtils';

describe("validateDateDifference tests", () => {
  test('dates with 1 hour time difference for 24 hours max difference passes', () => {
    let date1 = add(new Date(), {hours: -1});
    let date2 = new Date();
    expect(validateDateDifference(date1, date2, 24)).toEqual(true);
  })
  
  test('dates with 1/2 hour time difference for 24 hours max difference passes', () => {
    let date1 = add(new Date(), {minutes: -30});
    let date2 = new Date();
    expect(validateDateDifference(date1, date2, 24)).toEqual(true);
  });
  
  test('dates with 2 minutes time difference for 24 hours max difference passes', () => {
    let date1 = add(new Date(), {minutes: -2});
    let date2 = new Date();
    expect(validateDateDifference(date1, date2, 24)).toEqual(true);
  });
  
  test('dates with 25 hour difference for 24 hours max difference fails', () => {
    let date1 = add(new Date(), {days: -1, hours: -1});
    let date2 = new Date();
    expect(validateDateDifference(date1, date2, 24)).toEqual(false);
  });
  
  test('dates with the start date later than end date fails', () => {
    let date1 = add(new Date(), {hours: -1});
    let date2 = new Date();
    expect(validateDateDifference(date2, date1, 24)).toEqual(false);
  });
  
  test('dates where the times of the dates is equal fails', () => {
    let date1 = new Date();
    let date2 = new Date();
    expect(validateDateDifference(date2, date1, 24)).toEqual(false);
  });
});

describe("validateNumberInputs", () => {
  test("string input of numbers passes", () => {
     let input = "1,2,3,4,5";
     expect(validateNumberInput(input)).toEqual(true);
  });

  test("string input of alphanumeric characters fails", () => {
    let input = "1,alpha, 2, beta";
    expect(validateNumberInput(input)).toEqual(false);
  });

  test("string input of words fails", () => {
    let input = "alpha, beta";
    expect(validateNumberInput(input)).toEqual(false);
  });

  test("string input of single number passes", () => {
    let input = "2";
    expect(validateNumberInput(input)).toEqual(true);
  });
});
