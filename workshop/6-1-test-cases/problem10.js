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

  let words = sentence.split(' ');

  let capitalizedArray = [];

  words.forEach(capitalizedFirstLetter);

  function capitalizedFirstLetter(word, index) {
    //Capitalize word and add to sentence
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedArray.push(capitalizedWord);


  }

  return capitalizedArray.join(' ');

}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);

expect(
  makeIntoTitle('HELLO FROM THE OTHER SIDE'),
  'Hello From The Other Side'
);

expect(
  makeIntoTitle('hi'),
  'Hi'
);

expect(
  makeIntoTitle('HIMYNAMEISASHLEY'),
  'Himynameisashley'
);

expect(
  makeIntoTitle('8 8 8 hello'),
  '8 8 8 Hello'
);

expect(
  makeIntoTitle(' '),
  ' '
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