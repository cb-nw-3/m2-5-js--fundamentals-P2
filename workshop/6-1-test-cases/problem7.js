// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  // check if argument is an array of a string and a number
  if (
    arr.length === 2 && 
    typeof arr[1] === 'number' && 
    typeof arr[0] === 'string'
  ) {
    // check if number is positive
    if (arr[1] > 0) {
      // initialize variable
      let word = '';
      // add the argument string until loop over
      for (let i = 0; i < arr[1]; i++) {
        word += arr[0];
      }
      // return new string
      return word
    } else {
      return ''
    }
  } else {
    return undefined
  }
  // Your code here
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['foo', 6]), 'foofoofoofoofoofoo');
expect(repeat(['foo', -1]), '');
expect(repeat(['f', 3]), 'fff');
expect(repeat([3, 'foo']), undefined);
expect(repeat(['foo', 3, 3]), undefined);
expect(repeat(['', 3]), '');
expect(repeat(['foo']), undefined);
expect(repeat([3]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
