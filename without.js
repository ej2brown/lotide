const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove) {
  let result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item))
      result.push(item);
  }
  return result;
};

module.exports = without;

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", 5], [1, '2', "3", '5']), ["1", 5]);