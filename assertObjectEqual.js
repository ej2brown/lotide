const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      return eqObjects(object1[key], object2[key]);
    } else {
      if (object1[key] != object2[key]) {
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
 const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false


console.log(`Example label: ${inspect(actual)}`);