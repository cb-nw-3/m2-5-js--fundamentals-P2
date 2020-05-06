// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`
function addNumbers(...nums) {
  let sum = 0;

  for (let num of nums) {
    sum += num ** 2;

    if (typeof num === null) {
      return undefined;
    }
  }
  return sum;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(2, 2, 2), 12);
expect(addNumbers("a", 2, 3), 13);
expect(addNumbers(), undefined);
expect(addNumbers(1, 2, 3), 14);
expect(addNumbers(1, 2, 3), 14);
expect(addNumbers(1, 2, 3), 14);
expect(addNumbers(1, 2, 3), 14);

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
