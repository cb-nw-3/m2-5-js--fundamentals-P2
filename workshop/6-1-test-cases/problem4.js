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
  let str = arr[0];
  let index = arr[1];
  if(str[arr[1]] === ''){
    return undefined;
  }else{
    return str[arr[1]];
  }
  
}

// Add 6 more test cases
expect(getLetterAtIndex(['hello', 4]), 'o');
expect(getLetterAtIndex(['goodbye', 0]), 'g');
expect(getLetterAtIndex(['goodbye', 9]), undefined);
expect(getLetterAtIndex(['blah', 2]), 'a');
expect(getLetterAtIndex(['I', 265]), undefined);
expect(getLetterAtIndex(['', 265]), undefined);
expect(getLetterAtIndex(['great', 3]), 'a');
expect(getLetterAtIndex(['992', 0]), '9');

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
