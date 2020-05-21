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
  if (
    arr === undefined ||
    arr.length === 0 ||
    arr.length > 2 ||
    arr[1] < 0 ||
    typeof arr[1] !== "number"
  ) {
    return undefined;
  } else {
    return arr[0].charAt(arr[1]);
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(getLetterAtIndex(["goodbye", 0, 2]), undefined);
expect(getLetterAtIndex([]), undefined);
expect(getLetterAtIndex(["hello", -1]), undefined);
expect(getLetterAtIndex(["hello", "hello"]), undefined);
expect(getLetterAtIndex(), undefined);

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
