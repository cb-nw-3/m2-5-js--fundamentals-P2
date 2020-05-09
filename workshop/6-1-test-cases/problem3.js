// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  var isArrayOfNumbers = input.every((item) => typeof item === "number");

  if (!isArrayOfNumbers || input.length !== 2) return undefined;

  return input.reduce((total, item) => total + item, 0);
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([2, 4, 6]), undefined);
expect(sumDigits([2]), undefined);
expect(sumDigits(["hello", 6]), undefined);
expect(sumDigits([true, 6]), undefined);
expect(sumDigits([6, 6]), 12);

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
