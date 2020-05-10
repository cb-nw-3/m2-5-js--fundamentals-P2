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
  return arr[0].length === 0 ? undefined : arr[0].charAt(arr[arr.length - 1]);
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(
  getLetterAtIndex(["pneumonoultramicroscopicsilicovolcanoconiosis", 6]),
  "n"
);
expect(getLetterAtIndex(["", 5]), undefined);
expect(getLetterAtIndex(["oh my god!", 2]), " ");
expect(getLetterAtIndex(["oh my god!", 5]), " ");
expect(getLetterAtIndex(["mikE", 3]), "E");
expect(getLetterAtIndex(["", 3]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
