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
  if (letter === '') return undefined;
  return letter;
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');
expect(getLetterAtIndex(['1234567890', 9]), '0');
expect(getLetterAtIndex(['', '']), undefined);
expect(getLetterAtIndex(['ASHLEY', 1]), 'S');
expect(getLetterAtIndex(['TeStInFG6685%$^&$^*', 8]), '6');
expect(getLetterAtIndex(['goodnight', 34]), undefined);
expect(getLetterAtIndex(['goodbye', 4567]), undefined);

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