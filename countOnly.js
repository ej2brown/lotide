//asserEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};
//code
// allItems = [ "Fang", "Jason", "Fang","Joe"]
// itemsToCount = { "Jason": true, "Karima": true, "Fang": true }
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { // item = 'Fang'
    // check if item exists in itemsToCount
    if (itemsToCount[item] === true) {
      // if results has the key item on it, increment its value
      if (results[item]) {
        results[item] ++;
      } else {
              // else if results does not have item on it, set its value to 1
        results[item] = 1;
      }
    }
  }
  return results;
}



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

//test code
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// result1 = { Jason: 1, Fang: 2 }
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

