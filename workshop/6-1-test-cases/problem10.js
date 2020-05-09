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

function capIt(item) {
  let newWord = item.toLowerCase();
  let wordArray = newWord.split('');
  wordArray[0] = wordArray[0].toUpperCase();
  return wordArray.join('');
}

function makeIntoTitle(sentence) {
  if (sentence === "" || typeof sentence !== "string") {
    return;
  }
  let sentArray = sentence.split(' ');
  let newSentence = [];
  sentArray.forEach(function (item) {
    newSentence.push(capIt(item));
  })
  newSentence = newSentence.join(" ");
  return newSentence;
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);

expect(
  makeIntoTitle('0118 999 881 99 9119 7253'),
  '0118 999 881 99 9119 7253'
);
expect(
  makeIntoTitle(),
  undefined
);
expect(
  makeIntoTitle('99 luftballons is a song by Nena'),
  '99 Luftballons Is A Song By Nena'
);
expect(
  makeIntoTitle(['the longest road is a great song']),
  undefined
);
expect(
  makeIntoTitle('MAKE THIS WORD BIG'),
  'Make This Word Big'
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
