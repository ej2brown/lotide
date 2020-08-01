const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


//test code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
