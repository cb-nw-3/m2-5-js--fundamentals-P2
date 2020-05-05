// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  const letter = str.charAt(index);
  if (letter === "") return undefined;
  return letter;
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");

expect(getLetterAtIndex("", 1), undefined);
expect(getLetterAtIndex("hola", 2), "l");
expect(getLetterAtIndex("adios", 4), "s");
expect(getLetterAtIndex("bonjour", 3), "j");
expect(getLetterAtIndex("demain ", 7), undefined);
expect(getLetterAtIndex("toyota", 1), "o");
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
