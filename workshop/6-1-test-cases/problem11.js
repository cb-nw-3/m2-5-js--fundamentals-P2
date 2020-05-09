// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // Insert missing solution please
  if (nums.length != 0) {
    let value = 0;
    nums.forEach((num) => {
      typeof num === "number" ? (value += num ** 2) : "";
    });
    return value;
  }
  return undefined;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, "a"), 5);
expect(addNumbers(2.2, 4.5, 6.3, 8), 128.78);
expect(addNumbers("A", "b", 3, 8), 73);
expect(addNumbers(), undefined);
expect(addNumbers("hi i'M A string"), 0);
expect(addNumbers(-2, -4, 6, -9), 137);
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
