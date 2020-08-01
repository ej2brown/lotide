const assertEqual = require('./assertEqual');

let tail = (arr) => {
  return arr.slice(1);
}

module.exports = tail; 

//test code
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!