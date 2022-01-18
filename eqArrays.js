const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `);
  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const eqArrays = function (arr1, arr2){

  for(let num1 of arr1){
    for(let num2 of arr2) {
      if(num1 === num2){
        return true;
      }
      return false;
    }
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [4, 2, 7]), true); // => should FAIL