let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
let total = 0;
  for (let i = 0; i < input.length; i++) {
      total += input[i]*input[i];
  }
  return total;
}
// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(0,0,0), 10);expect(addNumbers(1, 2,"hi", 3), 14)
expect(addNumbers(), undefined)
expect(addNumbers('hello'), 0)
expect(addNumbers('good morning', 3), 9)
expect(addNumbers(-5), 2)
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
