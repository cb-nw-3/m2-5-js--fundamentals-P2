// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  const newArr = str.split('');
  
  let res = '';

  for (let i = 0; i < newArr.length; i++) {
    if (i % 40 === 0 && i > 0) {
      res += '\n';
      if (newArr[i] !== ' ') {
        res += newArr[i];
      }
    } else {
      res += newArr[i];
    }
  }
  // console.log(res);
  return res;
}

// TC 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not.'
);

// TC 2: Space after newline
expect(
  wrapAfter40Chars(
    'My favourite thing about cats is all the things.'
  ),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases

// TC 3: Very long word - no choice to cut it off 
// Info: lung disease caused by the inhalation of silica or quartz dust.
expect(
  wrapAfter40Chars(
    'Pneumonoultramicroscopicsilicovolcanoconiosis'
  ),
  'Pneumonoultramicroscopicsilicovolcanocon\niosis'
);

// TC 4: Multiples spaces before/after newline
expect(
  wrapAfter40Chars(
    'This sentence is really not interesting   !!!'
  ),
  'This sentence is really not interesting \n !!!'
);

// TC 5: Number after new line
// INFO: look like its cutting number whihc i didn't expect!!!
expect(
  wrapAfter40Chars(
    'Here is a sentence with a few numbers 4444444 55555'
  ),
  'Here is a sentence with a few numbers 44\n44444 55555'
);

// TC 6: Long sentence to test multiple new line break
expect(
  wrapAfter40Chars(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est expedita saepe, ducimus, debitis animi perferendis harum cumque?'
  ),
  'Lorem, ipsum dolor sit amet consectetur \nadipisicing elit. Accusantium est expedi\nta saepe, ducimus, debitis animi perfere\nndis harum cumque?'
);

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
