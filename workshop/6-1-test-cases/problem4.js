// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(arr, index) {
  if (typeof arr === "string" && typeof index === "number") {
    let arrArray = arr.split("");
    return arrArray[index];
  }
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");

expect(getLetterAtIndex(["h", "e", "l", "l", "o"], 4), undefined);
expect(getLetterAtIndex("goodbye", "zero"), undefined);
expect(getLetterAtIndex("goodbye", "goodbye".length - 4), "d");
expect(getLetterAtIndex(0, "goodbye"), undefined);
expect(getLetterAtIndex(["goodbye", 4]), undefined);
expect(getLetterAtIndex(45), undefined);
expect(getLetterAtIndex("45", 4), undefined);

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
