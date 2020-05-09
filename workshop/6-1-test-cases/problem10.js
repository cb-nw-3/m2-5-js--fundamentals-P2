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
  // Your code here
  const words = sentence.split(' ');
  let capitalizedWords = [];

  for(i = 0; i < words.length; i++) {
    const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'), 'The Longest Road Is A Great Song');
  
  expect(makeIntoTitle('ALL CAPS'),'All Caps');
  expect(makeIntoTitle('If It\'s Already Done'),'If It\'s Already Done');
  expect(makeIntoTitle('my name is Kolby mckeown'),'My Name Is Kolby Mckeown');
  expect(makeIntoTitle('a b c d e f'),'A B C D E F');
  expect(makeIntoTitle('my favorite number is 16'),'My Favorite Number Is 16');
  expect(makeIntoTitle('HELLO'),'Hello');

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
