// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline \n character after every 40 characters in the input string.
// If the next character after a cut is a space, then do not display it.

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  const charArr = str.split('');
  let res = '';

  for (let i = 0; i < charArr.length; i++) {
    if (i % 40 === 0) {
      res += '\n';
      if (charArr[i] !== ' ') {
        res += charArr[i];
      }
    } else {
      res += charArr[i];
    }
  }
}
