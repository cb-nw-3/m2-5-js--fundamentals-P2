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
  const letter = arr[0].charAt(arr[1]);
  if (letter === '') {
    return undefined;
  } else {
    return letter;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');

expect(getLetterAtIndex(['test', 2]), 's');
expect(getLetterAtIndex(['White space', 5]), ' ');
expect(getLetterAtIndex(['eoi', 3]), undefined);
expect(getLetterAtIndex(['', 0]), undefined);
expect(getLetterAtIndex(['Special char!', 12]), '!');
expect(getLetterAtIndex(['How about num 1', 14]), '1');

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
