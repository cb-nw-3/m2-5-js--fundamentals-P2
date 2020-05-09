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
  const str = arr[0];
  const count = arr[1];

  if (typeof str !== 'string' || typeof count !== 'number') {
    return undefined;
  }  else if (count <= 0) {
    return '';
  }
    let result = '';
    
    for (i = 0; i < count; i++) {
      result = result + str;
    }
    return result;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

  expect(repeat(['test', 2]), 'testtest');
  expect(repeat(['test', 2]), 'testtest');
  expect(repeat(['hello', 5]), 'hellohellohellohellohello');
  expect(repeat([1, 2]), undefined);
  expect(repeat(['should be an empty string', -1]), '');
  expect(repeat(['test', -15]), '');
  expect(repeat(['test', 3]), 'testtesttest');
  expect(repeat(['test', 0]), '');


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
