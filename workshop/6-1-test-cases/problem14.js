// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function test(str) {
  if(typeof(str) == 'string') {
    // let squished = str.split(' ').join('');
    let squished = str.split(' ').join('').slice(40);
    console.log(squished);
  } else {
    return undefined;
  }
}

function wrapAfter40Chars(str) {
  if (typeof(str) != 'string') { return undefined;}
  //combine all words in string
  let words = str.split(' ');
  //console.log(words);
  
  //new string should always start with the first word
  let newStr = words.shift();
  //console.log(newStr);

  //set the initial length of the string to the first word
  let count = newStr.length+1;
  //console.log(count);

  //loop through the remaining words
  words.forEach((word) => {

    //add the length of each new word to the total count
    count += word.length;

    //if the char count is less than 40, then add a space, else add a `\n`
    if (count <= 40) {
      newStr += ' ';
      count += 1; //to account for extra space
    } else {
      newStr += '\n';
      count = word.length;
    }
    newStr += word;
  })
  console.log(newStr);
  return newStr;
}

// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to\ngo on forever. Sadly, it does not.'
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars(
    'My favourite thing about cats is all the things.'
  ),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases
expect(
  wrapAfter40Chars(
    'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam'
  ),
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam'
);

expect(
  wrapAfter40Chars(
    ['Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam']
  ),
  undefined
);

expect(wrapAfter40Chars(55),undefined);
expect(wrapAfter40Chars(),undefined);

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
