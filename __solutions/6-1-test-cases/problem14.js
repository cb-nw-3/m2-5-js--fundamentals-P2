// Problem 14
// ----------

function wrapAfter40Chars(str) {
  const charArr = str.split('');
  let res = '';

  for (let i = 0; i < charArr.length; i++) {
    if (i % 40 === 0 && i > 0) {
      res += '\n';
      if (charArr[i] !== ' ') {
        res += charArr[i];
      }
    } else {
      res += charArr[i];
    }
  }

  return res;
}
