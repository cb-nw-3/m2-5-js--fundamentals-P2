// Problem 1
// ---------
// Step 1
// Write a function that returns the first character of the string that is
// passed to it.
// If it's an empty string (''), return undefined.

function firstLetter(str) {
  return str[0];
  return 5;
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

expect(firstLetter('max'), 'm');
expect(firstLetter('bacon'), 'b');
expect(firstLetter('Zebra'), 'Z');
expect(firstLetter('lion'), 'l');
expect(firstLetter(''), undefined);

expect(firstLetter('steuerberater'), 's');
expect(firstLetter('aktiengesellschaft'), 'a');
expect(firstLetter('Oberbefehlshaber'), 'O');
expect(firstLetter('Ägypten'), 'Ä');
expect(firstLetter('Ölbrenner'), 'Ö');

expect(firstLetter('4H'), '4');
expect(firstLetter('_underscore_'), '_');
expect(firstLetter('333'), '3');
expect(firstLetter('$4'), '$');
expect(firstLetter('#teamwork'), '#');

expect(firstLetter('+++'), '+');
expect(firstLetter(989989), undefined);
expect(firstLetter(' eyeopener'), ' ');
expect(firstLetter(666), undefined);
expect(firstLetter('blah'), 'b');

expect(firstLetter('Ça va'), 'Ç');
expect(firstLetter('làlàlà'), 'l');
expect(firstLetter('Calendrier'), 'C');
expect(firstLetter('èèè'), 'è');
expect(firstLetter('ééé'), 'é');
// St
// Run this file with Node.
// When all the tests pass, move on to the next problem

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
