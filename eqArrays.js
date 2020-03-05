const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};

const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      //console.log('false');
      return false;
    }
  }
  //console.log('true');
  return true;
};


console.log('eqarrays', eqArrays([1, 2, 3], [1, 2, 3])); // output eqarrays true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
