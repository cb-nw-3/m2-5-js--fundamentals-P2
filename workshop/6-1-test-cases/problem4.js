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
  // Your code here
  if (arr[0] === "") {
    return undefined;
  } else {
    return arr[0].charAt(arr[1]);
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');

expect(getLetterAtIndex(["", 4]), undefined);
expect(getLetterAtIndex(['Jenny', 1]), 'e');
expect(getLetterAtIndex(['JENNY', 3]), 'N');
expect(getLetterAtIndex(['I am', 0]), 'I');
expect(getLetterAtIndex(['I am into', 1]), ' ');
expect(getLetterAtIndex(['I am into deep', 2]), 'a');

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
