// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (nums[0]) {
    let sum = 0;
    nums.forEach(function (num) {
      if (typeof num === "number") {
        sum += num ** 2;
      }
    });
    return sum;
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(), undefined);
expect(addNumbers("piano", 1, 4, 5, [1, 3, 4]), 42);
expect(addNumbers("piano".length, 1, 4, 5, [1, 3, 4]), 67);
expect(addNumbers([1, 5, [1, 3, 4]]), 0);
expect(addNumbers("skipping", "every", { arguments: "passed" }), 0);
expect(addNumbers(["piano", "turc", "spagatte"], 6), 36);
expect(addNumbers(9, 19, 333), 111331);

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
