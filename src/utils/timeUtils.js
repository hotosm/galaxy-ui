export const getTimeZone = (date) => {
  const offset = date.getTimezoneOffset();
  const absoluteValue = Math.abs(offset);

  let symbol = offset < 0 ? "+" : "-";
  let hours = ("00" + Math.floor(absoluteValue / 60)).slice(-2);
  let minutes = ("00" + (absoluteValue % 60)).slice(-2);

  return `UTC${symbol}${hours}:${minutes}`;
};
