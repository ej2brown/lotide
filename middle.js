// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  middle();
  if (actual === expected) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};

// ACTUAL FUNCTION
const middle = function(arr) {
  const midStart = Math.floor(arr.length / 2);
  console.log(midStart);
  let midEnd = midStart + 1;
  if (arr.length % 2 === 0) {
    midEnd = midStart + 2;
  }
  console.log(midEnd);
  const midNumber = arr.slice(arr[midStart], arr[midEnd]);
  console.log(midNumber);
  return midNumber;
};

// TEST CODE

middle('mid',[1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
//assertArraysEqual(middle([1, 2, 3])), [2]);