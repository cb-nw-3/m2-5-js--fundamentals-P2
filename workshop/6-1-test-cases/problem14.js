// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".


function removeSpacesFromStart(sentence)
{
  if (sentence.slice(0, 1) === " ") {
    return sentence.slice(1);
  }
  return sentence;
}


function wrapAfter40Chars(str) {
  
  let newString;
  
  let numChars = str.length;
  let sentences = [];

  let extraCharsOnLastLine = numChars%40;
  let lines = Math.floor(numChars/40);
  

  if (typeof(str) != 'string') {
    console.log ('input is not a string');
    return undefined;
  }

  for (i=0; i<lines; i++)   {
    let newString = str.slice(i*40, (i*40 + 40));
    newString = removeSpacesFromStart(newString);
    sentences.push(newString);
  }
  let lastChars = str.slice(numChars-extraCharsOnLastLine);
  lastChars = removeSpacesFromStart(lastChars);

  sentences.push(lastChars);

  return sentences.join("\n");;

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

expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not. Sadly, it does not Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not. Sadly\n, it does not Sadly, it does not.'
  );

expect(
  wrapAfter40Chars(
    'short string'
  ),
  'short string'
  );
  
expect(
    wrapAfter40Chars(
      '373474 My 495759 😁avourite thing about cats is all the things'
    ),
    '373474 My 495759 😁avourite thing about \ncats is all the things'
    );
  
expect(
  wrapAfter40Chars(
    ['hello']
  ),
    undefined
  );
    
  

// Add 4 more test cases

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
