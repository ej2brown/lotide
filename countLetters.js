//assert
const assertEqual = function (actual, expected) {
  console.log(typeof actual);
  console.log(typeof expected);
  if (actual === expected) {
    console.log('Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('Assertion Failed: ', actual, ' !== ', expected);
  }
};

//code
const countLetters = function(sentence) {
  const letterBank = {};
  for (const letter of sentence) {
    // [x] console.log(letter); L H L
    if (letterBank[letter]) {
      letterBank[letter]++;
    } else {
      letterBank[letter] = 1;
    }
    // [x] console.log(letterBank[letter]); 1, 1, 2
  } return letterBank;
};


//test code 
assertEqual(countLetters('LHL'), { L: 2, H: 1 }); // output: 