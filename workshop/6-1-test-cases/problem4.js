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
  let letter = arr[0].charAt(arr[1]);
  if (letter === '') return undefined;
  else return letter;
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');
expect(getLetterAtIndex(['', 5]), undefined);
expect(getLetterAtIndex(['hamburger', 1000]), undefined);
expect(getLetterAtIndex(['5', 0]), '5');
expect(getLetterAtIndex(['sushi', 'u']), 2);
expect(getLetterAtIndex(['pizza', 10]), undefined);
expect(getLetterAtIndex(['salamanca', 8]), 'a');

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
