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

  for (let i = 0; i < words.length; i++) {
    const capitalizedWord =
      words[i].charAt(0).toUpperCase() +
      words[i].slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('i love you'),
  'I Love You'
);
expect(
  makeIntoTitle('I LOVE YOU'),
  'I Love You'
);
expect(
  makeIntoTitle('i wANT tO bE aN aSTRONAUT'),
  'I Want To Be An Astronaut'
);
expect(
  makeIntoTitle('123 good morning'),
  '123 Good Morning'
);
expect(
  makeIntoTitle('a123456'),
  'A123456'
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
