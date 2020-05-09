import mdxTheme from '../theme';
export const theme = mdxTheme;

# Merge Conflicts

---

So let's say you and I are working together on a feature.

---

We have this code:

```js
const a = 5;
const b = 10;

function addVariables(a, b) {
  return a + b;
}

addVariables(a, b);
```

---

We both make edits to this code.

---

```js
// Original
const a = 5;
const b = 10;

// Your code
const a = 5;
const b = 10;

// My code
const a = 5;
const b = 10;
```

---

If we both change different lines, it's fine.

Git can merge our changes together without issue.

---

# But

What if we both change the same line?

---

```js
// Original
const a = 5;
const b = 10;

// Your code
const a = 5;
const b = 10;

// My code
const a = 5;
const b = 10;
```

---

When we merge our code together, we will get a **merge conflict**.

---

A merge conflict is Git telling you that it doesn't know how to combine two changes, and it needs guidance.

Happily, the tooling it provides is pretty great.

---

# Demo!
