let verifyEquals = require("./verify-equals.js");

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (nums === undefined || nums.length === 0) {
    return undefined;
  } else {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === "number") {
        total = total + Math.pow(nums[i], 2);
      }
    }
    return total;
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, 3, "dog"), 14);
expect(addNumbers(), undefined);
expect(addNumbers([]), 0);
expect(addNumbers(-1, -2, -3), 14);
expect(addNumbers("I am tired"), 0);
expect(addNumbers(-2, 3), 13);
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
