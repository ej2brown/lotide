// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('Assertion Passed: ', actual, ' === ', expected);
//   } else {
//     console.log('Assertion Failed: ', actual, ' !== ', expected);
//   }
// };

const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};


module.exports = eqArrays;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('Assertion Passed: ', actual, ' === ', expected);
//   } else {
//     console.log('Assertion Failed: ', actual, ' !== ', expected);
//   }
// };

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   if (!(Array.isArray(arr1) || Array.isArry(arr2))) {
//     return false;
//   }
//   for (let value of arr1) {
//     console.log(valuey)
//     if (arr1[index] !== arr2[index])
//       return false;
//   }
//   return true;
// };

