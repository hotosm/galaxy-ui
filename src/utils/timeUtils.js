import { formatDuration } from "date-fns";

export const getTimeZone = (date) => {
  const offset = date.getTimezoneOffset();
  const absoluteValue = Math.abs(offset);

  let symbol = offset < 0 ? "+" : "-";
  let hours = ("00" + Math.floor(absoluteValue / 60)).slice(-2);
  let minutes = ("00" + (absoluteValue % 60)).slice(-2);

  return `UTC${symbol}${hours}:${minutes}`;
};

const convertToSeconds = (time) => {
  if (!time) return null;
  const [hours, minutes, seconds] = time.split(":");
  const secondsInHour = 60 * 60;
  const secondsInMinute = 60;
  const totalSeconds =
    parseInt(hours) * secondsInHour +
    parseInt(minutes) * secondsInMinute +
    parseFloat(seconds);
  return totalSeconds;
};

export const formatDurationOutput = (time) => {
  const timeInSeconds = convertToSeconds(time);
  if (timeInSeconds > 1) {
    const intervals = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
      months: 0,
      years: 0,
    };
    const durationSplitArray = time.split(",");
    // split time into hours, minutes and seconds
    const lastArrayElement = durationSplitArray[durationSplitArray.length - 1];
    const [hours, minutes, seconds] = lastArrayElement.split(":");
    intervals["hours"] = parseInt(hours);
    intervals["minutes"] = parseInt(minutes);
    intervals["seconds"] = parseInt(seconds);
    // further split into days, weeks, months, years - if available
    if (durationSplitArray.length > 1) {
      for (let i = 0; i < durationSplitArray.length - 1; i++) {
        const intervalSplit = durationSplitArray[i].trim().split(" ");
        if (intervalSplit[1].includes("day"))
          intervals["days"] = parseInt(intervalSplit[0]);
        if (intervalSplit[1].includes("week"))
          intervals["weeks"] = parseInt(intervalSplit[0]);
        if (intervalSplit[1].includes("month"))
          intervals["months"] = parseInt(intervalSplit[0]);
        if (intervalSplit[1].includes("year"))
          intervals["years"] = parseInt(intervalSplit[0]);
      }
    }
    return `${formatDuration(intervals)} ago`;
  } else {
    return "less than a second ago";
  }
};
