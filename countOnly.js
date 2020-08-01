const assertEqual = require('./assertEqual');

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  // check if item exists in itemsToCount
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      // if results has the key item on it, increment its value
      if (results[item]) {
        results[item]++;
      } else {
        // else if results does not have item on it, set its value to 1
        results[item] = 1;
      }
    }
  }
  return results;
}

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result["Jason"], 1);
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);


module.exports = countOnly;