// let verifyEquals = require('../../assets/verify-equals');

// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(string, num) {
  if(num > string.length-1 || string === "" || num < 0 || typeof num !== 'number'){
    return undefined
  }
  return string.charAt(num)
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o'); 
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('Love', 3), 'e')
expect(getLetterAtIndex('do',4),undefined)
expect(getLetterAtIndex('', 0), undefined)
expect(getLetterAtIndex('duck', -3), undefined)
expect(getLetterAtIndex('slide', 'dog'), undefined)
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
