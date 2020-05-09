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

  let outputString = "";

  for (i=0; i<arr[1]; i++)
  {
    outputString = outputString + arr[0];
    //console.log(outputString);
  }
  return outputString;
  // Your code here
}

repeat(["foo", 3]);
expect (repeat(["foo", 3]), "foofoofoo" );
expect (repeat(["fo", 3]), "fofofo" );
expect (repeat(["foo", -1]), "" );
expect (repeat(["", -1]), "" );
expect (repeat(["", 5]), "" );
expect (repeat([1,2]), "11" );
expect (repeat(["d",2.1]), "ddd" ); // rounds up, because the iterator is still greater than zero

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
