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
  // Your code here
  if (
    typeof arr[0] !== "string" ||
    typeof arr[1] !== "number" ||
    typeof arr !== "object"
  ) {
    return undefined;
  } else {
    return arr[0].split("")[`${arr[1]}`];
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(getLetterAtIndex(["", 0]), undefined);
expect(getLetterAtIndex([123]), undefined);
expect(getLetterAtIndex(123), undefined);
expect(getLetterAtIndex(["callaway", 5]), "w");

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
