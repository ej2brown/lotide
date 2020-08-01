const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};
  const noSpaces = sentence.replace(/\s/g, "");

  for (let i = 0; i < noSpaces.length; i++) {
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    } else {
      results[noSpaces[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

//test code
assertArraysEqual(letterPositions("hello").e, [1]);