// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(string, index) {
  // Your code here
  if (string.charAt(0) === '') return undefined;
  return string.charAt(index);
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('hello world', 5), ' ');
expect(getLetterAtIndex('cat', 2), 't');
expect(getLetterAtIndex('car', 0), 'c');
expect(getLetterAtIndex('ball', 3), 'l');
expect(getLetterAtIndex('Concordia', 10), '');
expect(getLetterAtIndex('', 0), undefined);

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
