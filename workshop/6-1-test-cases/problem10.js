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

  if(typeof(sentence)=='string') {
    let words = sentence.split(" ");
    let newSentence = [];
    console.log(words);
    words.forEach(word => {
      let newWord = word.charAt(0).toUpperCase() + word.slice(1);
      newSentence.push(newWord);
    })
    let final = newSentence.join(" ");
    console.log(final);
    return final;
  }
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);

expect(
  makeIntoTitle(['the longest road is a great song']),
  undefined);

  
expect(
  makeIntoTitle(''),
  '');

expect(
  makeIntoTitle('5'),
  '5');

expect(
  makeIntoTitle(5),
  undefined);


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
