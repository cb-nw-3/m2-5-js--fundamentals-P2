import mdxTheme from '../../theme';
export const theme = mdxTheme;

<!--
  NOTE: Not needed for exercises.
  Feel free to postpone
-->

# 2.5.6 — Variable shadowing

---

We've talked a bit about how variables have scope…

---

### Inside the house

```js
let backyard = ['Abraham', 'Cindy', 'BZZT-ROBOT-3000'];

function house() {
  let caretaker = 'Beatrice';

  // `caretaker` is in the house, but they can still see the backyard.
  console.log(backyard); // works!
}

// In the backyard, we can't see into the house. Too bright outside!
console.log(caretaker); // error
```

---

You can always "look out" from within a scope.

You can never "look in".

---

A scope is formed by:

- Functions
- If / Else

If you see squiggly brackets _other_ than an object (`let hi = {}`), it's a scope.

---

# Breakout Exercises

⚠️ Minimal instruction ⚠️

<!--
  We haven't yet covered shadowing, but one needs to know shadowing in order
  to answer these questions correctly. This is an attempt at having students
  teach themselves and each other, by thinking through various scenarios
-->

---

### Exercise 1:

```js
let isHungry = true;
let fruit = 'watermelon';

if (isHungry) {
  // Switch to a more filling melon
  let fruit = 'cantaloupe';
}

// What is the value of `fruit`?
console.log(fruit);
```

---

### Exercise 2:

```js
let roomTemperature = 21;

function turnOnHeater() {
  roomTemperature = 24;
}

// What is the value of `roomTemperature`?
console.log(roomTemperature);
```

---

### Exercise 3:

```js
let mood = '😪';

function watchTelevision() {
  let show = 'Tiger King';
  mood = ['😳', '🤢', '🥴'];
}

if (mood === '😪') {
  watchTelevision();
}

// What is the value of `mood`?
console.log(mood);
```

---

### Exercise 4:

```js
let recipe = [
  'crack eggs into bowl',
  'beat eggs until velvety',
  'add salt & pepper to taste',
  'combine with flour',
  'bake until dough has leavened',
];

bake();

function bake(recipe) {
  // What is the value of `recipe`?
  console.log(recipe);
}
```

---

# Variable rules

---

### Variables can be reassigned from within child scopes

```js
let hi = 5;

if (true) {
  // Reassign the parent variable to `10`
  hi = 10;
}
```

---

### Variables can be "shadowed" in child scopes

```js
let hi = 5;

if (true) {
  // Create a new variable named hi.
  // DOES NOT affect the `hi` in the parent scope.
  let hi = 10;
}

console.log(hi); // 5
```

---

### Variables can be shadowed in function parameters

```js
let hi = 5;

function sayHi(hi) {
  return hi;
}

console.log(sayHi()); // undefined
console.log(sayHi(hi)); // 5
console.log(sayHi('greetings')); // 'greetings'
```
