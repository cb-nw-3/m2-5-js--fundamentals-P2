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
  sentence = sentence.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(makeIntoTitle('hello wORLD!'), 'Hello World!');
expect(makeIntoTitle('I ATE pizza for lunch.'), 'I Ate Pizza For Lunch.');
expect(
  makeIntoTitle('IS JAVAsCRIPT the most popular language in the world?'),
  'Is Javascript The Most Popular Language In The World?'
);
expect(makeIntoTitle('doubleKILL'), 'Doublekill');
expect(makeIntoTitle('foofoofoo'), 'Foofoofoo');

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
