// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(arr) {

  return arr[i]
  // Your code here
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('goodbye', 5), 'y');
expect(getLetterAtIndex('goodbye', -1), undefined);
expect(getLetterAtIndex('goodbye', "0"), undefined);
expect(getLetterAtIndex('goodbye'), undefined);
expect(getLetterAtIndex(0, 'goddbye'), undefined);
expect(getLetterAtIndex('asd123!"sd_', 6), '!');
expect(getLetterAtIndex('goodbye', 10), undefined);
expect(getLetterAtIndex(), undefined);

/*
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
