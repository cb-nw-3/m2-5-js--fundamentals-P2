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
  // Your code here
  // console.log(arr[0].split);
  if (
    typeof arr[0] === "string" &&
    typeof arr[1] === "number" &&
    arr.length === 2
  ) {
    return arr[0].split("")[arr[1]];
  } else return undefined;
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(getLetterAtIndex([1, "JAVAscript"]), undefined);
expect(getLetterAtIndex(["JAVAscript", 22]), undefined);
expect(getLetterAtIndex(["123456789", 3]), "4");
expect(getLetterAtIndex(["0!@##$$%%", -12]), undefined);
expect(getLetterAtIndex(["0!@##$$%%", 8]), "%");
expect(getLetterAtIndex({ key: "boss", color: "red" }), undefined);

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
