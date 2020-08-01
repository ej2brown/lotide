const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
 const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};

module.exports = assertObjectsEqual;

//TEST DRIVER
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

console.log(`Example label: ${inspect(actual)}`);