// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f("foo", 3) // "foofoofoo"
// f("fo", 3) // "fofofo"
// f("foo", -1) // ""

function repeat(arr) {
  // Your code here
  let stg = arr[0];
  let num = arr[1];
  let adding = '';

  if (typeof stg !== 'string' || typeof num !== 'number'){
    return undefined
  } else if (num <= 0){
    return '';
  }

  for (let i = 0; i < num; i++) {
    adding = adding + stg;
  }
  return adding;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['foo', 1]), 'foo');
expect(repeat(['fo', 2]), 'fofo');
expect(repeat(['foo', 0]), '');
expect(repeat(['foo', -1]), '');
expect(repeat(['foo', 'foo']), undefined);
expect(repeat([2, 1]), undefined);
expect(repeat(['foo', 3]), 'foofoofoo');

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
