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
  let str = arr[0];
  let multiplier = arr[1];
  if(arr[1] === 0){
    return '';
  }else if(arr[1] < -0){
    return '';
  }else if(1 > arr[1] > 0 || arr[1] === NaN){
    return undefined;
  }else{
    return str.repeat(arr[1]);
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(['mult', 2]), 'multmult');
expect(repeat(['sub', 4]), 'subsubsubsub');
expect(repeat(['sub', .8]), undefined);
expect(repeat(['pow', 2]), 'powpow');
expect(repeat(['whoa', 4]), 'whoawhoawhoawhoa');
expect(repeat(['add', 0]), '');
expect(repeat(['mult', -1]), '');
expect(repeat(['sub', 4]), 'subsubsubsub');

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
