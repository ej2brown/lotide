const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
  // if (actual === expected) {
  //   console.log(`Assertion Passed: ${actual} === ${expected}`);
  // } else {
  //   console.log(`Assertion Failed: ${actual} !== ${expected}`);
  // }
//};


const head = function(arr) {
 // console.log(arr[0]);
  return arr[0];
};


module.exports = head;