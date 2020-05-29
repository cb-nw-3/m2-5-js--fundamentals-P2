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

// Write a function that capitalizes a single word.
function makeIntoTitle(sentence) {

  // Split the input sentence into an array of words
  const arrOfWords = sentence.split(' ');
  console.log(arrOfWords);
  // Create empty array for all capitalized words
  let capitalizedWords = [];

  // Iterate over each word, calling your "capitalize word" function
  for (let i = 0; i < arrOfWords.length; i++) {
    const capitalizedWord =
      // iterate thru each word and make char position 0 to uppercase 
      arrOfWords[i].charAt(0).toUpperCase() +

      // iterate thru each word, slice word char from position 1 and make it to lowercase
      arrOfWords[i].slice(1).toLowerCase();

    // Push capitalized words to the empty array
    capitalizedWords.push(capitalizedWord);
  }

  console.log(capitalizedWords);
  // Join the results into a string
  return capitalizedWords.join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('THIS IS A COOL SENTENCE!!!'),
  'This Is A Cool Sentence!!!'
);

expect(makeIntoTitle('hOWlONGiStHISwORD!!!'),'Howlongisthisword!!!');
expect(makeIntoTitle('123 456 789'),'123 456 789');
expect(makeIntoTitle(''), '');
expect(makeIntoTitle('_tEST'), '_test');

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
