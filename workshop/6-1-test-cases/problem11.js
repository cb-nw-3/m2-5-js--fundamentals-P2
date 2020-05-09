// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // check if there is any arguments
  if (nums.length === 0) {
    return undefined
  } else {
    // initialize sum
    let sum = 0;
    // loop through arguments
    for (let i = 0; i < nums.length; i++) {
      // check if there is an intruder aka not a number
      if (typeof nums[i] !== 'number') {
        return undefined
      } else {
        // add the square of each argument to the sum
        sum += nums[i] ** 2;
      }
    }
    return sum
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, 3, 4, 5, 6), 91);
expect(addNumbers(1, 2, 'string'), undefined);
expect(addNumbers(), undefined);
expect(addNumbers(-1, -2, -3), 14);
expect(addNumbers(1, 2, 3, 0), 14);
expect(addNumbers(1), 1);
expect(addNumbers('string'), undefined);
expect(addNumbers(1, true, 3), undefined);

/*
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
