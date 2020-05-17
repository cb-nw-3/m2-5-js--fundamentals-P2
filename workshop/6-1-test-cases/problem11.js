let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(arr) {
  if (arr === '') return undefined;
  else {
    let reducer = (a, b) => a ** 2 + b ** 2;
    return arr.reduce(reducer);
  }
}

// Add 7 more test cases.
expect(addNumbers([1, 2, 3]), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(''), undefined);
expect(addNumbers([1, 1]), 2);
expect(addNumbers([1, 2, 2, 2, 2]), 17);
expect(addNumbers([1, 0, 1]), 2);
expect(addNumbers([0, 0, 0]), 0);
expect(addNumbers([1]), 1);
expect(addNumbers([6, 8]), 100);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
