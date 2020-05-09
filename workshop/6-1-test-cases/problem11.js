// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // Insert missing solution please
  if (nums.length === 0) return undefined;
  return nums.reduce(
    (previous, current) =>
      (typeof current === 'number' ? previous + (current * current) : previous),
    0
  )
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(2, 'a', 3), 13);
expect(addNumbers(), undefined);
expect(addNumbers('a', '', 'a'), 0);
expect(addNumbers(1, 1, 1), 3);
expect(addNumbers(1, 2, 'a'), 5);
expect(addNumbers(1, 3, 'car'), 10);
expect(addNumbers(1, 2, 3, 2), 18);

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
