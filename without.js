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


const without = function(source, itemsToRemove){

/**
 * implementation logic:
 * - we will iterate through all the elements in the source array
 * - we will iterate through all the elements of the items to remove 
 * - we will compare if they are equal, if so, we can remove them
 * - we will use the array.splice method as it makes changes to the original array and returns modified array, and it also seems more suitable for this use case
 * Note: we can probably use eqArrays method/function, however, in terms of implementation we will just implement it at first and we will take care of the rest later, like eslint or refactoring. 
 * Also in terms of looping, we can maybe use the c-style looping, but we can also use forEach loop to have access to both the index and the element, because we will need the index to delete elements from the array
 * 
 */
  source.forEach((sourceElement, sourceIndex) => {
    itemsToRemove.forEach((itrElement) => {
      if (sourceElement === itrElement) {
        source.splice(sourceIndex, 1);
      }
    });
  });

  return source;
};

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])); // => [2, 3] || should PASS

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 2])); // => should FAIL