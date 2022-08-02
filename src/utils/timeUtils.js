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
    +hours * secondsInHour + +minutes * secondsInMinute + +seconds;
  return totalSeconds;
};

export const formatDurationOutput = (time) => {
  const timeInSeconds = convertToSeconds(time);
  if (timeInSeconds > 0) {
    return `${Number(timeInSeconds).toFixed(2)} seconds ago`;
  } else {
    return "less than a second ago";
  }
};
