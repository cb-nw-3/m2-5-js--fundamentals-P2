// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex(["hello", 1]); // e
// getLetterAtIndex(["", 4]);      // undefined
// getLetterAtIndex(["abc", 0]);   // a

function getLetterAtIndex(arr) {
  if (typeof(arr[0]) === "string" && arr[0].length > arr[1]){
    return (arr[0])[arr[1]];
  } else {
    return undefined;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');
expect(getLetterAtIndex([6, 0]), undefined);
expect(getLetterAtIndex([ , 0]), undefined);
expect(getLetterAtIndex(["Hi", 4]), undefined);
expect(getLetterAtIndex([true, 0]), undefined);
expect(getLetterAtIndex([["Hi", "Bye"], 0]), undefined);
expect(getLetterAtIndex(["Hi", ]), undefined);

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
