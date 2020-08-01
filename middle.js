const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const midStart = Math.floor(arr.length / 2);
  let midEnd = midStart + 1;
  if (arr.length % 2 === 0) {
    midEnd = midStart + 2;
  }
  const midNumber = arr.slice(arr[midStart], arr[midEnd]);
  return midNumber;
};

// test code
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle('mid',[1])); // => []
assertArraysEqual(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2, 3])); // => [2]

module.exports = middle;