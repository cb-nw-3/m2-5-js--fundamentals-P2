// let verifyEquals = require("./verify-equals.js");

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // console.log(nums);
  // Insert missing solution please
  let sum = 0;
  nums.forEach((element) => {
    if (isNaN(element)) {
      return;
    }
    sum += element * element;
  });
  return sum;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14);
expect(addNumbers(1, "mike", 3), 10);
expect(addNumbers("joe", "mike", "✅", 5), 25);
expect(addNumbers(1, 2, 4, 5), 46);
expect(addNumbers(1, "joe", "✅", 5), 26);
expect(addNumbers(1, 5), 26);
expect(addNumbers(1, "bab"), 1);
expect(addNumbers(1, 2, 3, 4), 30);
// 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14

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
