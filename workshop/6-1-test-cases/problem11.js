// let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (nums.length > 0) {
    let total = 0;

    for (i = 0; i < nums.length; ) {
      if (isNaN(nums[i])) {
        i++;
      }
      total += nums[i] * nums[i];
      i++;
    }
    return total;
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(), undefined);
expect(addNumbers(1, 2, 3, "skip", "skip"), 14);
expect(addNumbers(8, 8), 128);
expect(addNumbers("skip"), undefined);
expect(addNumbers(7), 49);
expect(addNumbers("", "skip", 4, 5), 41);
expect(addNumbers("", 4), 16);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
