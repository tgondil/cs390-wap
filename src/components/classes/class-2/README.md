# Class 2 – JavaScript for the Browser (with DOM-first Recap)

## Class Overview (50 minutes)
Class 2 focuses on JavaScript fundamentals and how to manipulate the DOM to create interactive web pages. We’ll start with a quick DOM recap (from Class 1) and then build up from modern JS syntax to event-driven interactivity.

- Scope: Vanilla JS only (no Git/GitHub today, no frameworks)
- Outcome: Students can read/write modern JS, transform data, and update the DOM based on user actions

---

## Section 0: DOM Recap (5 minutes)

### 0.1 What is the DOM?
- The DOM is a tree representation of your HTML
- Nodes: document → html → head/body → elements → text
- CSS selectors map directly to DOM queries

### 0.2 Why it matters for JS
- JS reads/changes the DOM (content, attributes, styles)
- Typical workflow: query → compute → render

### 0.3 Quick recap code
```html
<div id="card" class="card">
  <h2 class="title">Welcome</h2>
  <p class="desc">This is a description.</p>
</div>
<button id="toggle">Toggle Highlight</button>
<script>
  const card = document.querySelector('#card');
  const btn = document.querySelector('#toggle');
  btn.addEventListener('click', () => {
    card.classList.toggle('highlight');
  });
</script>
```

---

## Section 1: JavaScript Essentials (10 minutes)

### 1.1 Values, Types, and Variables
- Types: number, string, boolean, null, undefined, object, array
- `let` and `const` (prefer const; use let if you reassign)
- Template literals for readable strings
```js
const name = 'Amina';
const score = 42;
const message = `Hi ${name}, your score is ${score}.`;
```

### 1.2 Conditionals and Truthiness
- `if/else`, ternary `? :`, `&&` and `||`
- Truthy/falsy ("", 0, null, undefined, NaN are falsy)
```js
const input = '';
const label = input ? 'Valid' : 'Please enter text';
```

---

## Section 2: Functions and Control Flow (10 minutes)

### 2.1 Functions
- Declarations vs arrow functions
- Parameters, default values, return values
```js
function add(a, b = 0) { return a + b; }
const multiply = (a, b) => a * b;
```

### 2.2 Scope and Early Returns
- Block scope with `let/const`
- Use early returns to simplify logic
```js
function formatUsername(name) {
  if (!name) return 'Anonymous';
  return name.trim().toLowerCase();
}
```

---

## Section 3: Arrays and Objects (10 minutes)

### 3.1 Arrays
- Common methods: `push`, `pop`, `map`, `filter`, `find`, `includes`
```js
const scores = [78, 90, 67, 95];
const passing = scores.filter(s => s >= 70);
const plusFive = scores.map(s => s + 5);
```

### 3.2 Objects
- Dot vs bracket access; nested objects
- Destructuring and spread/rest
```js
const user = { id: 1, name: 'Amina', role: 'dev' };
const { name, role } = user; // destructuring
const withTag = { ...user, tag: 'team-a' }; // spread
```

### 3.3 Data → UI pattern
- Data array → `map` to HTML strings → render to container
```js
const people = [
  { name: 'Amina', role: 'Frontend' },
  { name: 'Diego', role: 'Backend' },
];
const html = people.map(p => `
  <div class="person">
    <h3>${p.name}</h3>
    <p>${p.role}</p>
  </div>`
).join('');
document.querySelector('#list').innerHTML = html;
```

---

## Section 4: DOM Selection & Events (10 minutes)

### 4.1 Selecting and Updating
- `querySelector`, `querySelectorAll`
- `textContent`, `innerHTML`, `value`
- `classList.add/remove/toggle`, inline `style`
```js
const title = document.querySelector('.title');
title.textContent = 'Updated Title';
```

### 4.2 Events
- `addEventListener('click' | 'input' | 'submit', handler)`
- `event.preventDefault()` for forms; `event.target.value` for inputs
```js
const form = document.querySelector('#add-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#name');
  addPerson(input.value);
  input.value = '';
});
```

---

## Section 5: Live Demos (10 minutes)

### 5.1 Counter
- A `+1` button updates a number displayed on screen
```html
<div id="count">0</div>
<button id="inc">+1</button>
<script>
  let count = 0;
  document.querySelector('#inc').addEventListener('click', () => {
    count += 1;
    document.querySelector('#count').textContent = count;
  });
</script>
```

### 5.2 Dark Mode Toggle
- Toggle a class on the root container
```js
document.querySelector('#toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

### 5.3 Filterable List
- Input filters an array and re-renders the DOM
```js
const input = document.querySelector('#search');
input.addEventListener('input', () => {
  const q = input.value.toLowerCase();
  const filtered = people.filter(p => p.name.toLowerCase().includes(q));
  render(filtered);
});
```

---

## Micro-Challenges (sprinkled, 1–2 min each)
- Convert all names in a list to uppercase (map)
- Highlight every 3rd card (loop + modulo)
- Disable a button until input length ≥ 3 (guard + event)

---

## Wrap-Up (5 minutes)
- Quick recap of key concepts
- Preview next class: React components, JSX, props

---

## Interactive Design Elements (for slides)
- Dark gradient backgrounds; glassmorphism cards
- Bottom navigation dots + progress (same template as Class 1)
- Code blocks with copy-to-clipboard
- Live widgets: counter, toggle, filter demo

## Accessibility
- High contrast; keyboard-focusable buttons/inputs
- Don’t convey meaning by color alone; provide text labels

---

## Estimated Timing Breakdown

| Section | Duration | Content Type |
|--------|----------|--------------|
| DOM Recap | 5 min | Concept + quick demo |
| JS Essentials | 10 min | Syntax + mini examples |
| Functions & Flow | 10 min | Patterns + readable functions |
| Arrays & Objects | 10 min | Data transforms + render |
| DOM & Events | 10 min | Query, update, events |
| Live Demos | 5 min | Counter, toggle, filter |
| Wrap-up | 5 min | Recap + preview |
| **Total** | **50 min** | **Hands-on, demo-driven** |

---

## Learning Outcomes
By the end of this class, students will be able to:
1. Explain the DOM and select/update elements with JS
2. Use modern ES6+ syntax (let/const, arrows, template literals)
3. Write clear functions and use early returns
4. Transform data using `map`, `filter`, and `find`
5. Handle user events (click/input/submit) and update the UI
6. Build small features in vanilla JS that mirror React patterns 