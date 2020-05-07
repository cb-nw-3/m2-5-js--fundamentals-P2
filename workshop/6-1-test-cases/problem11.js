let verifyEquals = require("./verify-equals.js");

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // Insert missing solution please
  let sum = 0;
  if (nums.length === 0) {
    return undefined;
  }
  for (i = 0; i < nums.length; i++) {
    console.log(sum);
    if (typeof nums[i] === "number") {
      sum = sum + Math.pow(nums[i], 2);
    }
  }
  return sum;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, "string"), 5);
expect(addNumbers(), undefined);
expect(addNumbers(1, 1, 1, 1, 1), 5);
expect(addNumbers(-1, -2, -3), 14);
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
