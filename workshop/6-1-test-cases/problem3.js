// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if(input.length == 2 && typeof(input[0])=='number' && typeof(input[1])=='number') {
    return input[0]+input[1];
  } else {
    return;
  }
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);

expect(sumDigits(['a', 5]), undefined); //first input is string
expect(sumDigits([-1, 'b']), undefined); //second input is string
expect(sumDigits(['a','b' ]), undefined);//both inputs are string
expect(sumDigits([-5, 'o','1',2]), undefined); //mix of string and numbers in longer input
expect(sumDigits([2, 5,3,5]), undefined);//long input of numbers


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
