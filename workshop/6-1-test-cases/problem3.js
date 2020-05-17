// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if (typeof input !== 'object') return undefined;
  else if (input.length !== 2) return undefined;
  else if (typeof input[0] || input[1] !== 'number') return undefined;
  else return input[0] + input[1];
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([4, 1, 5]), undefined);
expect(sumDigits('not a number'), undefined);
expect(sumDigits(['not a number', 1]), undefined);
expect(sumDigits([1, 'not a number']), undefined);
expect(sumDigits([5]), undefined);

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
