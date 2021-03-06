const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `);
  }
};


const tail = function(arr) {
  let tailA = [];
  if (arr.length > 0) {
    tailA = arr.slice(1);
    return tailA;
  } else {
    return tailA;
  }
};

let tailArr = ["Hello", "Lighthouse", "Labs"];
const result = tail(tailArr);

console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"
console.log(assertEqual(tailArr.length, 3)); // ensure the original array is not modified