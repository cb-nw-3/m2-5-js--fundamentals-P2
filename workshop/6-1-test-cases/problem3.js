// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  let sum = 0;
  let noNumber = false;
  input.forEach((element) => {
    if (isNaN(element)) {
      noNumber = true;
    }
    sum += element;
  });
  return (sum = noNumber ? undefined : sum);
}

// function sumDigits(input) {
//   let sum = 0;
//   input.forEach((element) => {
//     if (isNaN(element)) {
//       sum = undefined;
//       return;
//     }
//     sum += element;
//   });
//   return sum;
// }

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([1, 2, 3, 4, 5]), 15);
expect(sumDigits([1, 2, 3, 4, 5, 6]), 21);
expect(sumDigits([1, -2, 3, -4, 5, -6]), -3);
expect(sumDigits([1, "my name is john", 3, -4, 5, -6]), undefined);
expect(sumDigits([1, 2, 3, 4, "mike"]), undefined);
expect(sumDigits(["kelly", 2, 3, 4, 5]), undefined);

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
