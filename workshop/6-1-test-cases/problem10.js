// Problem 10
// ----------
// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  // check if argument is a string
  if (typeof sentence === 'string') {
    // split the string in an array
    let sentenceArr = sentence.split(' ');
    // loop through the array
    for (let i = 0; i < sentenceArr.length; i++) {
      // 1stElem of the array = First letter capitalized + rest of the word lowercase
      sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].slice(1).toLowerCase();
    }
    // rejoin the array into a string
    sentence = sentenceArr.join(' ');
    return sentence
  } else {
    return undefined
  }
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle(true),
  undefined
);
expect(
  makeIntoTitle(123),
  undefined
);
expect(
  makeIntoTitle('THE LONGEST ROAD IS A GREAT SONG'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('1he longest road is a great song'),
  '1he Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('the longest road is a great song' + 'THE LONGEST ROAD IS A GREAT SONG'),
  'The Longest Road Is A Great Songthe Longest Road Is A Great Song'
);

/*
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
