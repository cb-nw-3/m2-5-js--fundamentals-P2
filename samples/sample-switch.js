const date = new Date();
const day = date.getDay();

console.log( `Today is day ${day}.`);
console.log( '--------------------');

switch (day) {
  case 0:
    console.log("Sunday Brunch @ 11AM");
  case 1:
  case 2:
  case 4:
    console.log("In the Office by 8:30AM");
  case 3:
    console.log("It's hump day!!");
  case 5:
    console.log("TGIF!!");
  case 6:
    console.log("Morning Trail Run @ 7AM");
  default:
    console.log("value of i is not equal to any given days");
}

console.log( '--------------------');