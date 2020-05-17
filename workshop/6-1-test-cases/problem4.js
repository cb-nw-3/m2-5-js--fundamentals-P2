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
  let theLetter = arr[0].charAt(arr[1]);
  if (theLetter === " ") return undefined;
  return theLetter;
}

// Add 6 more test cases
// expect(getLetterAtIndex(["hello", 4]), "o");
// expect(getLetterAtIndex(["goodbye", 0]), "g");
// expect(getLetterAtIndex(["serendipty", 9]), "y");
// expect(getLetterAtIndex(["World", 0]), "W");
// expect(getLetterAtIndex(["", 4]), "");
// expect(getLetterAtIndex(["", 4]));
expect(getLetterAtIndex(["silly", 1]), "i");
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
