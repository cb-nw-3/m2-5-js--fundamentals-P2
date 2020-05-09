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
  
    let char = arr[0].charAt(arr[1]);
    if (char === ""){
      return undefined
    } else {
      return arr[0].charAt(arr[1]);

    }
  // Your code here
}

// Add 6 more test cases



expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');
expect(getLetterAtIndex(['goodbye', 2]), 'o');
expect(getLetterAtIndex(['goodbye', -2]), undefined);
expect(getLetterAtIndex(['1234', 0]), '1');
expect(getLetterAtIndex(['goodbye', 99]), undefined);
expect(getLetterAtIndex(['', 0]), undefined);
expect(getLetterAtIndex(['a', 0]), 'a');


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
