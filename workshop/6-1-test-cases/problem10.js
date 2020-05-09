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

  if (typeof(sentence) != 'string') {
    console.log ('input is not a string');
    return undefined;
  }

  let cappdArray =[];
  let words = sentence.split(' ');
  words.forEach(
    function(element) {
      cappdArray.push(capitalizeTheFirstWord(element));
    }
  );

  return cappdArray.join(' ');

}

function capitalizeTheFirstWord(word){
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('99 stuf1'),
  '99 Stuf1'
);
expect(
  makeIntoTitle(1000),
  undefined
);
expect(
  makeIntoTitle('😄 yo yo'),
  '😄 Yo Yo'
);
expect(
  makeIntoTitle('ALL YOUR BASE ARE BELONG'),
  'All Your Base Are Belong'
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
