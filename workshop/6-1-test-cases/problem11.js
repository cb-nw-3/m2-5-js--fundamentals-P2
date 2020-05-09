// let verifyEquals = require("./verify-equals.js");

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0] ** 2;
  let firsIteration = true;
  return nums.reduce((a, b) => {
    if (typeof b !== "number") {
      return a;
    }
    if (firsIteration) {
      firsIteration = false;
      return a ** 2 + b ** 2;
    }
    return a + b ** 2;
  });
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, true), 5);
expect(addNumbers(1, 2, true, 3), 14);
expect(addNumbers(1, 2, true, 3, "4", 4), 30);
expect(addNumbers(1), 1);
expect(addNumbers(2, 2), 8);
expect(addNumbers(4), 16);
expect(addNumbers(), 0);

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
