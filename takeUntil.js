// const eqArrays = function(arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log('Assertion Passed: ', actual, ' === ', expected);
//   } else {
//     console.log('Assertion Failed: ', actual, ' !== ', expected);
//   }
// };

const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    let newArr = callback(array[i]);
    if (newArr === true) {
      return array.slice(0,i);
    }
  } 
  return array;
}
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);

  console.log('---');

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

// sudo command 
// > callback with one value 
// 	 const log = function(value) 
// > loop through array, stop at condition
// 	use for loop 
// 	use if statment with parameter2 with conditions

// .filter() or slice 

