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

const middle = function (arr) {
  let middleElement= [];
  let firstMid = 0;
  let secondMid = 0;
  let oddMiddle = 0;

  if (arr.length === 1 || arr.length === 2) {
    return middleElement;
  }

  if(arr.length % 2 === 0){
    firstMid = Math.floor ((arr.length - 1) / 2);
    secondMid = Math.ceil ((arr.length - 1) / 2);
    // console.log('firstMid', firstMid);
    // console.log('secondMid', secondMid);
    middleElement.push(firstMid);
    middleElement.push(secondMid);
  } else {
    oddMiddle = ((arr.length - 1) / 2);
    // console.log('oddMiddle', oddMiddle);
    middleElement.push(oddMiddle);
  }

  return middleElement;
}

// console.log(middle([0, 1, 2, 3, 4, 5, 6]));