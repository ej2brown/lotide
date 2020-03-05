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

const eqObjects = function (object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] != object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false