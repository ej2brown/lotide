const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};

const eqArrays = function (arr1, arr2) {

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
