function getUniqueElements(arr1, arr2) {
  const uniqueElements = [];

  for (let i = 0; i < arr1.length; i++) {
    const curr = arr1[i];
    let isUnique = true;

    for (let j = 0; j < arr2.length; j++) {
      const other = arr2[j];

      if (curr === other) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) uniqueElements.push(curr);
  }
  return uniqueElements;
}

function f(input) {
  const arr1 = input[0];
  const arr2 = input[1];
  return getUniqueElements(arr1, arr2).concat(
    getUniqueElements(arr2, arr1)
  );
}

// Shorter
function getUniqueElementsV2(arr1, arr2) {
  return arr1.filter(
    (elm) => !arr2.some((other) => elm === other)
  );
}

function g(input) {
  const arr1 = input[0];
  const arr2 = input[1];
  return getUniqueElementsV2(arr1, arr2).concat(
    getUniqueElementsV2(arr2, arr1)
  );
}
