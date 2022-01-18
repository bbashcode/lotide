const eqArrays = function(arr1, arr2) {
  for (let num1 of arr1) {
    for (let num2 of arr2) {
      if (num1 === num2) {
        return true;
      }
      return false;
    }
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => should FAIL

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => should PASS

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); //should FAIL