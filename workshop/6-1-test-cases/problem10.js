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

function toCaps(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


function sentence(str){
  let myArray = [];
  let words = str.split(' ');
  words.forEach(function toCaps(word){
    myArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }); return myArray.join(' ');
}



// Add 6 total (5 more)
expect(
  sentence('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);

expect(
  sentence('the quick brown fox jumps over the lazy dog'),
  'The Quick Brown Fox Jumps Over The Lazy Dog'
);

expect(
  sentence('please excuse my dear aunt sally'),
  'Please Excuse My Dear Aunt Sally'
);

expect(
  sentence('four score and seven years ago'),
  'Four Score And Seven Years Ago'
);

expect(
  sentence('denkst du vielleicht gerade an mich'),
  'Denkst Du Vielleicht Gerade An Mich'
);

expect(
  sentence('ad astra per aspera'),
  'Ad Astra Per Aspera'
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
