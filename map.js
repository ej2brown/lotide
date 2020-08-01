const assertArraysEqual = require('./assertArraysEqual');

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

//test code
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
