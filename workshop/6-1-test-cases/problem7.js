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
  console.log(`The first element is ${arr[0]} and the second is ${arr[1]}`);
  if(arr.length == 2 && typeof(arr[0]) == 'string' && typeof(arr[1]) == 'number'
    && arr[1] > 0) {
      return arr[0].repeat(arr[1]);
    };
  
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(['foo',3]),'foofoofoo');
expect(repeat(['foo',-1]),undefined);
expect(repeat(['',-1]),undefined);
expect(repeat(['',5]),'');
expect(repeat(['foo',0]),undefined);
expect(repeat([5,2]),undefined);
expect(repeat(['5',2]),'55');
expect(repeat([2,3]),undefined);
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
