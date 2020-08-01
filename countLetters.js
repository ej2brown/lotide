const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const letterBank = {};
  for (const letter of sentence) {
    if (letterBank[letter]) {
      letterBank[letter]++;
    } else {
      letterBank[letter] = 1;
    }
  } return letterBank;
};

module.exports = countLetters;

//test code 
assertEqual(countLetters('LHL'), { L: 2, H: 1 }); // output: 