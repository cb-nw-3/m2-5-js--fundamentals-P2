// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex(["hello", 1]); // e
// getLetterAtIndex(["", 4]);      // undefined
// getLetterAtIndex(["abc", 0]);   // a

//&& typeof(arr[0])=='string' && typeof(arr[1]) =='number'

function getLetterAtIndex(...arr) {
  if (arr.length == 2 && typeof(arr[0])=='string' && typeof(arr[1]) =='number'){
    return arr[0].charAt(arr[1]);;
  } else {
    return;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');

expect(getLetterAtIndex('hello','goodbye', 3,2), undefined);
expect(getLetterAtIndex('goodbye', '0'), undefined);
expect(getLetterAtIndex(4, 'hello'), undefined);
expect(getLetterAtIndex('5', 0), '5');
expect(getLetterAtIndex('hello', 7), '');
expect(getLetterAtIndex('goodbye', -6), '');

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
