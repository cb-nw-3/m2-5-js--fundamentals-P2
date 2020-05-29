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

// - The function input is an array.
function repeat(arr) {
  // The first element of the array is a string.
  const str = arr[0];

  // The second element of the array is a number.
  const num = arr[1];

  // If any invalid parameters are supplied return undefined.
  if (typeof str !== 'string' || typeof num !== 'number')
    return undefined;
  
  // If a negative number or zero is specified, return an empty string.
  if (num <= 0)
    return '';

  let newStr = '';

  // Return the string repeated as many times as specified by the second element of the array.
  for (let i = 0; i < num; i++) {
    newStr = newStr + str;
  }
  return newStr;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat([{firstName:"Carlito"}, 2]), undefined);
expect(repeat([true, 2]), undefined);
expect(repeat([ , 2]), undefined);

expect(repeat(['1234', -1]), '');
expect(repeat(['1234', 0]), '');

expect(repeat(['test', 2]), 'testtest');
expect(repeat(['te', 3]), 'tetete');
expect(repeat([' ', 2]), '  ');






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
