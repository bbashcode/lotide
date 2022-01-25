const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `);
  }
};


const countLetters = function(sentence) {
  let results = {};

  for (let char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
      
  }

  return results;
};

console.log(countLetters("lighthouse in the house"));