// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if (input.length !== 2) {
    return undefined
  } 
  else if (typeof input[0] !== 'number') {
    return undefined
  } else if (typeof input[0] !== 'number') {
    return undefined
  }
  return input[0] + input[1];
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([215, -215]), 0);
expect(sumDigits([172, 12]), 184);
expect(sumDigits([1, 3, 4, 6]), undefined);
expect(sumDigits([15, 0]), 15);
expect(sumDigits(['bob', 'jack']), undefined);


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
