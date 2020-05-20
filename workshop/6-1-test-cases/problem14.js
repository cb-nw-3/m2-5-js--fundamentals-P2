// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  if(typeof str !== "string"){
    return undefined;
  } else {
    let charArray = str.split("");
    for(let i = 0; i <= charArray.length - 1; i++){
      if(i > 0 && i % 40 === 0){
        if (charArray[i] === " "){
          charArray.splice(i,1,"\n");
        } else {
          charArray.splice(i,0,"\n");
        }
      }
    }
    return charArray.join("");
  }
}

// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not.'
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars(
    'My favourite thing about cats is all the things.'
  ),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases
expect(wrapAfter40Chars(''),'');
expect(wrapAfter40Chars(),undefined);
expect(wrapAfter40Chars(55),undefined);
expect(wrapAfter40Chars('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.'),
'Lorem ipsum dolor sit amet, consectetuer\nadipiscing elit. Aenean commodo ligula \neget.');




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
