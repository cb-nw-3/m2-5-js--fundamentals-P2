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
  if (typeof sentence === "string") {
    let newSentence = "";
    sentenceArray = sentence.split(" ");
    for (let j = 0; j < sentenceArray.length; j++) {
      let wordArray = sentenceArray[j].split("");
      wordArray[0] = wordArray[0].toUpperCase();
      for (let i = 1; i < sentenceArray[j].length; i++) {
        wordArray[i] = wordArray[i].toLowerCase();
      }
      if (j < sentenceArray.length - 1) {
        newSentence = newSentence.concat(wordArray.join(""), " ");
      } else {
        newSentence = newSentence.concat(wordArray.join(""));
      }
    }
    return newSentence;
  }
  return undefined;
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(
  makeIntoTitle("good WILL huNting is a gREAT moviE"),
  "Good Will Hunting Is A Great Movie"
);
expect(
  makeIntoTitle(["hola", "good WILL huNting is a gREAT moviE"]),
  undefined
);

expect(makeIntoTitle("1 is an integer number"), "1 Is An Integer Number");

expect(
  makeIntoTitle("I like paint it black by the rolling stones"),
  "I Like Paint It Black By The Rolling Stones"
);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
