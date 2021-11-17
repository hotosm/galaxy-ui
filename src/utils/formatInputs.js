export const convertStringToNumberArray = (input) => {
  let result = [];
  if (input.length > 0){
    result = input.split(',').map((i) => Number(i)).filter((x) => x !== 0);
  }
  return result;
}

export const convertStringToArray = (input) => {
  let result = [];
  if (input.length > 0) {
    let arr = input
        .split(',')
        .map((i) => {
            i = i.toString().trim();
            if(i.startsWith('#')) i = i.substr(1)
            return i;  
        })
    let pattern = /([a-zA-Z0-9])\w+/gi
    result = arr.filter((j) => j.match(pattern))
}
  return result;
}