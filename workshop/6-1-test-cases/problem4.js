// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

// this is a function to make sure that the string is what it says it is
// and if'n it ain't, then we's gots a problem.

function validateStr(str) {
  if (typeof str != "string") {
    return;
  }

  if (Number(str) === str) {
    return;
  }

  if (str === undefined || str === "") {
    return;
  }

  return true;
}

// verily, for this be the function blessed before the LORD
// and this function shall verify that the number shall be a number
// and yea, it shall be true, and not be blank
// for thus saith the LORD

function validateNum(index) {
  if (typeof index != "number") {
    return;
  }

  if (index === undefined || index === "") {
    return;
  }

  return true;
}

function getLetterAtIndex(str, index) {
  if (validateStr(str) && validateNum(index)) {
    if (str.length < index) {
      return;
    }

    let charArr = str.split('');
    return charArr[index];
  }
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');

expect(getLetterAtIndex('', 0), undefined);
expect(getLetterAtIndex(), undefined);
expect(getLetterAtIndex('2', 3), undefined);
expect(getLetterAtIndex(0), undefined);
expect(getLetterAtIndex('eritrea', 20), undefined);
expect(getLetterAtIndex([], 8), undefined);

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
