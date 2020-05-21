// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if (input.length > 2) {
    return undefined;
  } else {
    for (let i = 0; i < 2; i++) {
      if (typeof input[i] !== "number") {
        return undefined;
      }
    }
    return input.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits[(2, 5, -1, 0)], undefined);
expect(sumDigits([]), undefined);
expect(sumDigits(["icecream", 2]), undefined);
expect(sumDigits(["icecream", "cookies"]), undefined);
expect(sumDigits([10, "icecream"]), undefined);

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
