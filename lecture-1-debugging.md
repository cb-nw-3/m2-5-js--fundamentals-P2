# 2.5.1 - Debugging

---

# True or false

A programmer spends almost all of their time writing code

---

Writing code is only one of the many things that a programmer does.

We spend lots of time doing other things as well.

- Reading documentation
- Reading code
- Researching (googling)
- **Debugging code**

---

## Bugs! Where do they come from?

- Typos
- Forgot to pass an argument
- Pass the wrong type of data as an argument
- Make wrong assumptions
- A million other things

---

### Exceptions

In certain cases, a bug will cause your code to crash. **This is a good thing.**

An error is a message that _tells you what the problem is_.

---

⚠️ Exception location is often only a **starting point**!

The actual programmer mistake can very well be elsewhere.

_This is similar to how a human error in a factory will manifest itself only in the final product._

---

### Example

```js
const x = 5;
const y = [1, 2, 3];

y.map(x);
```

```
TypeError: 5 is not a function
```

---

Always **read error messages**.

---

# Researching

---

Let's say we get an error message that we don't understand:

```js
function getCartTotal(data) {
  let salesTax = 1.14;
  return data.cart.subtotal * salesTax;
}

getCartTotal({
  items: ['banana'],
  subtotal: 5,
});
```

---

How do we fix it?

---

# Hard problems

---

Let's say you're told to solve this problem:

```js
// Write a function that takes a sentence
// and returns the length of the longest word,
// times 100
//
// eg. longestCount('Hi there'); // 500
//     longestCount('Be kind and be nice'); // 400
```

---

# Googling tips

- Search for the error message, without any custom variable names, and "javascript"
- Search for the problem domain (breaking into smaller pieces)
- Be skeptical
- Skim results

---

## Testing

---

- What is it?
- Why do we do it?
- When do we do it?

---

### What is a test?

```js
// Example
function sum(num1, num2) {
  return num1 + num2;
}

// A test helper
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

// tests
expect(sum(1, 1), 2);
expect(sum(5, 12), 17);
expect(sum('hi', 10), 'hi10');
```

---

_Let's talk about test-driven development a little._

---

# Exercises

Find and fix the issues.

---

```js
function getLetterGrade(score) {
  if (score < 60) {
    return "F";
  } else if (score < 75) {
    return "C";
  } else if (score < 90) {
    return "B"
  } else {
    return "A";
}

function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(getLetterGrade(81), "B");
expect(getLetterGrade(62), "C");

```

---

```js
function findMiddleWord(sentence) {
  const words = sentence.split(' ');
  const numOfWords = words.length;

  const middleWord = words[numOfWords / 2];

  return middleWord;
}

function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(findMiddleWord('I had a good day today'), 'good');
expect(findMiddleWord('Brussel sprouts are underrated'), 'are');
expect(findMiddleWord('I do not enjoy bananas'), 'not');
```

---

```js
function doesNameStartWithLetter(name, letter) {
  let firstLetter = name[0];
  if ((firstLetter = letter)) {
    return true;
  } else {
    return false;
  }
}

function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(doesNameStartWithLetter('Josh', 'J'), true);
expect(doesNameStartWithLetter('Josh', 'A'), false);
```

---

### Exception, where are you?

There are cases when

- there is no error message.
- the error message is wrong.

---

Possible causes are

- Infinite loop
- Error is caught somewhere else
- Bug is in the build process (covered later in the course)

---

#### Finding Exceptions

The error message is missing perhaps 5% of the time (rough).

This makes it hard to find the bug.

This is where using `console.log()` can really help.

---

Learning to `console.log` effectively is an essential part of becoming a developer.

It allows you to be independent.

_It's one of the most important parts of this course._

---

[Next lecture: Hoisting](../lecture-2-hoisting)

---
