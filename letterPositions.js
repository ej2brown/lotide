//assert code 
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
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
  }
  return true;
};


//main code 
const letterPositions = function (sentence) {
  const results = {};
  const noSpaces = sentence.replace(/\s/g, "");

  for (let i = 0; i < noSpaces.length; i++) {
    console.log('i', i);
    console.log('letter:', noSpaces[i]);
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    } else {
      results[noSpaces[i]] = [i];
    }
  }
console.log('results:', results);
return results;
};




//test code
// letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions("hello").e, [1]);



// letterPositions(("lighthouse in the house"), { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// })