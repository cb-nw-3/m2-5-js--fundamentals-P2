// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  if(str.length < 40){
    return undefined
  }
  let position = 40;
  let lineBreak = '\n';
  let nextPosition = str.charAt(40)
  let finalString =''
  
  while(str.length > 40){

    finalString = finalString + str.slice(0, position) + lineBreak;
    str = str.slice(position);
    console.log('string', str)
    console.log(finalString)
  }

  return finalString


  if(nextPosition === ' '){
    finalString = str.slice(0, position) + lineBreak + str.slice(41)
    console.log('inside' ,finalString)
    return finalString
  }
  finalString = str.slice(0, position) + lineBreak + str.slice(position)
  console.log('outside', finalString)
  return finalString

}

wrapAfter40Chars('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu')
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
