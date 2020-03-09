// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
let tail = (x) => {
  return x.slice(1);
}
// const tail = function(arr) {
//   console.log(arr.slice[-1]);
//   let stringCon = 0;
//   for (let i = 1; i < arr.length; i++) {
//     stringCon += arr[i];
//   }
// };

//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!
module.exports = tail; 