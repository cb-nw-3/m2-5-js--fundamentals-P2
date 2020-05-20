// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function compare(a,b){
  if(a.lgth>b.lgth) {return 1}
  if(b.lgth>a.lgth) {return -1} 
  else {return 0}
}

function longestWord(str) {
  if (typeof str !== "string"){
    return undefined;
  } else {

  let wordArray = str.split(" ");
  let objectArray = [];
  for (let i = 0; i <= wordArray.length - 1; i++){
    objectArray.push({
      lgth: wordArray[i].length,
      word: wordArray[i]
    })
  }

  // let's sort and return this...
  objectArray = objectArray.sort(compare);
  return objectArray[objectArray.length - 1].word;
}
}

// We need 5 test cases
expect(longestWord(""), "");
expect(longestWord("Hello my name is Alex"), "Hello");
expect(longestWord("Hi Ok"), "Ok");
expect(longestWord("supercalifragilisticexpialidocious"), "supercalifragilisticexpialidocious");
expect(longestWord(true), undefined);



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
