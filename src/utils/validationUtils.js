import { differenceInMinutes } from "date-fns";

export const validateDateDifference = (startDate, endDate, timeInHours) => {
  let valid = false;
  if (
    differenceInMinutes(endDate, startDate) <= timeInHours * 60 &&
    differenceInMinutes(endDate, startDate) > 0
  ) {
    valid = true;
  }
  return valid;
};

export const validateNumberInput = (input) => {
  let valid = true;
  if (input.length > 0) {
    if (input.split(",").every((i) => Number.isInteger(Number(i)))) {
      valid = true;
    } else {
      valid = false;
    }
  }
  return valid;
};

export const validateMapathonFormData = (formInputs) => {
  const { startDate, endDate, TMProjectIds, mapathonHashtags } = formInputs;

  let validDate = validateDateDifference(startDate, endDate, 24);
  if (!validDate) throw new Error("Invalid Time");

  if (
    TMProjectIds.trim().length === 0 &&
    mapathonHashtags.trim().length === 0
  ) {
    throw new Error("Missing fields");
  }

  let validIds = validateNumberInput(TMProjectIds);
  if (!validIds) throw new Error("Invalid IDs");

  return validDate && validIds;
};
