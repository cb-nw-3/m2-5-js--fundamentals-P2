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

function capitalize(word){
  let capitalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalWord;
}

function makeIntoTitle(sentence) {
  if(typeof sentence !== 'string' || sentence === ''){
    return undefined
  }
  let array = sentence.split(' ');
  let capitalizedArray = array.map(function (item){
    return capitalize(item)
  });
  

  let finalString = capitalizedArray.join(' ')
  return finalString
}



// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('The gays will rule the WORLD'),
  'The Gays Will Rule The World'
);
expect(
  makeIntoTitle(1340),
  undefined
)

expect(
  makeIntoTitle(''),
  undefined
)

expect(
  makeIntoTitle('DOGS !'),
  'Dogs !'
)

expect(
  makeIntoTitle('The gays will rule the WORLD'),
  'The Gays Will Rule The World'
)
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
