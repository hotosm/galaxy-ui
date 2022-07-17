export const convertStringToNumberArray = (input) => {
  let result = [];
  if (input.length > 0) {
    result = input
      .split(",")
      .map((i) => {
        i.trim();
        return Number(i);
      })
      .filter((x) => x !== 0);
  }
  return result;
};

export const convertStringToArray = (input) => {
  let result = [];
  if (input.length > 0) {
    result = input.split(",").map((i) => {
      i = i.toString().trim();
      if (i.startsWith("#")) i = i.substr(1);
      return i;
    });
  }
  return result;
};
