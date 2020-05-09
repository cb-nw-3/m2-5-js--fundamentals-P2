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
  if (arr.length !== 2) return undefined;
  if (typeof arr[0] !== "string") return undefined;
  if (typeof arr[1] !== "number") return undefined;
  // if (arr[0].length > arr[1] || arr[1] < 0) return undefined;

  return arr[0][arr[1]];
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(getLetterAtIndex([1, 0]), undefined);
expect(getLetterAtIndex(["something", true]), undefined);
expect(getLetterAtIndex(["something", -1]), undefined);
expect(getLetterAtIndex(["hey", 10]), undefined);
expect(getLetterAtIndex(["hey", 2]), "y");
expect(getLetterAtIndex(["hey", 0]), "h");

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
