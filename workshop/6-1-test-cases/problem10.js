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
  if (typeof sentence === "string") {
    let newSentence = [];
    let splitSentence = sentence.split(" ");

    splitSentence.forEach(function (str) {
      let strArray = str.split("");
      let capitalizedWord = [];
      for (let i = 0; i < strArray.length; i++) {
        if (i === 0) {
          capitalizedWord.push(strArray[i].toUpperCase());
        } else {
          capitalizedWord.push(strArray[i].toLowerCase());
        }
      }
      newSentence.push(capitalizedWord.join(""));
    });

    return newSentence.join(" ");
  }
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("war and peace"), "War And Peace");
expect(makeIntoTitle("the", "longest", "road", "is a great song"), "The");
expect(makeIntoTitle("ALL YOUR BASE ARE BELONG"), "All Your Base Are Belong");
expect(makeIntoTitle(12412), undefined);
expect(makeIntoTitle(["war", "and", "peace"]), undefined);

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
