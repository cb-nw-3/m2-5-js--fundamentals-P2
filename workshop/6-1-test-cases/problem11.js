// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(input) {
  // Insert missing solution please
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
      sum += input[i]*input[i];
  }
  return sum;
}

// Add 7 more test cases.
expect(addNumbers([1, 2, 3]), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14

expect(addNumbers([1, 1, 1]), 3);
expect(addNumbers([1, 2, 4]), 21);
expect(addNumbers([1, 2, 5]), 30);
expect(addNumbers([1, 2, 6]), 41);
expect(addNumbers([1, 2, 7]), 54);
expect(addNumbers([1, 2, 8]), 69);
expect(addNumbers([1, 2, 9]), 86);
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
