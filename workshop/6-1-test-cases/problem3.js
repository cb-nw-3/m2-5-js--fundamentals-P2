// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(arr) {
console.log(arr.length);
console.log(typeof(arr[0]) === "number");
console.log(typeof(arr[1]) === "number");

if(arr.length === 2 &&
  typeof(arr[0]) === "number" &&
  typeof(arr[1]) === "number"){
    return arr[0] + arr[1];
  } else {
    return undefined;
  }
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([-1, 0, 8]), undefined);
expect(sumDigits([-1, "d"]), undefined);
expect(sumDigits([, 1]), undefined);
expect(sumDigits([1, true]), undefined);
expect(sumDigits([3, [2,3]]), undefined);


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
