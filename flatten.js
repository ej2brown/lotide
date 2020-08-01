const flatten = function (array) {
  let flattenArr = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const element of item) {
        flattenArr.push(element);
      }
    } else {
      flattenArr.push(item);
    }
  }
  return flattenArr;
};

module.exports = flatten;