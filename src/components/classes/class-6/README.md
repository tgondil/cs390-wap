# Class 6 – Introduction to React

## Class Overview (50 minutes)
Class 6 introduces React, the most popular JavaScript library for building user interfaces. We'll learn how React changes the way we think about building web applications by focusing on **components**, **declarative programming**, and **state management**. Instead of manually manipulating the DOM, React lets us describe what we want and handles the rest.

- **Prerequisites**: Classes 2-3 JavaScript concepts (functions, arrays, objects, DOM, APIs)
- **Scope**: React fundamentals - the mental model, syntax, and core concepts
- **Outcome**: Students understand React's approach and can build basic interactive components

---

## Section 0: Why React? The Mental Shift (8 minutes)

### 0.1 The Problem: Complex DOM Management
When we build interactive websites with vanilla JavaScript, we constantly have to:
- **Find elements** in the DOM (`querySelector`)
- **Update content** manually (`textContent`, `innerHTML`)
- **Track state** in variables outside the DOM
- **Synchronize** everything when data changes

This gets messy fast! Imagine updating a scoreboard during a basketball game - every time someone scores, you'd have to manually update the team scores, individual player stats, the game clock display, and the leaderboard. Miss one update and everything gets out of sync!

### 0.2 React's Solution: Declarative UI
React flips this around. Instead of telling the browser **how** to update the DOM, you tell React **what** the DOM should look like based on your data. React figures out the how.

**Key Concept**: You describe the end result, not the steps to get there.

### 0.3 The React Mental Model
Think of React like a **movie director with a script**:
1. You write the **script** (components) that describes each scene
2. You provide the **cast and props** (data) for each scene
3. The director (React) handles all the **camera work, lighting, and scene transitions** automatically
4. When the script changes, the director re-shoots only the scenes that need updating

This is called **declarative programming** - you declare what the final movie should look like, not how to operate each piece of equipment.

---

## Section 1: Components - Building Blocks of React (12 minutes)

### 1.1 What is a Component?
A **component** is a JavaScript function that returns a description of what should appear on the screen. Think of it like a **LEGO brick with instructions** - each brick has a specific shape and purpose, but you can combine them in countless ways to build anything from a house to a spaceship.

**Core Concept**: Components are reusable pieces of UI that can be combined to build complex interfaces.

```jsx
// A component is just a function that returns JSX
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// You can use it like an HTML tag
<Welcome />
```

### 1.2 JSX: HTML-Like Syntax in JavaScript
JSX is React's special syntax that lets you write HTML-like code inside JavaScript. It looks familiar but has some important differences.

**Why JSX?** It makes React components readable and intuitive - you can see the structure of your UI right in your JavaScript code.

```jsx
function UserGreeting() {
  const userName = "Alice";
  const isLoggedIn = true;
  
  return (
    <div>
      <h1>Welcome back, {userName}!</h1>
      {isLoggedIn && <p>You have 3 new messages</p>}
    </div>
  );
}
```

### 1.3 JSX Syntax Rules
JSX looks like HTML but follows JavaScript rules:

1. **Single Parent Element**: Every component must return one parent element
   ```jsx
   // ✅ Good - wrapped in div
   return <div><h1>Title</h1><p>Content</p></div>;
   
   // ❌ Bad - multiple top-level elements
   return <h1>Title</h1><p>Content</p>;
   ```

2. **JavaScript Expressions in Curly Braces**: Use `{}` to embed JavaScript
   ```jsx
   const name = "Bob";
   return <h1>Hello, {name}!</h1>;  // Outputs: Hello, Bob!
   ```

3. **Different Attribute Names**: Some HTML attributes have different names
   - `class` becomes `className`
   - `for` becomes `htmlFor`
   - Event handlers use camelCase: `onclick` becomes `onClick`

4. **Self-Closing Tags**: All tags must be properly closed
   ```jsx
   <img src="photo.jpg" />  // Note the /
   <br />
   ```

### 1.4 Embedding JavaScript in JSX
The power of JSX comes from mixing HTML structure with JavaScript logic:

```jsx
function ProductCard() {
  const product = { name: "Laptop", price: 999, inStock: true };
  const discountPercent = 10;
  
  return (
    <div className="product">
      {/* Variables */}
      <h3>{product.name}</h3>
      
      {/* Calculations */}
      <p>Price: ${product.price - (product.price * discountPercent / 100)}</p>
      
      {/* Conditional rendering */}
      {product.inStock ? <button>Buy Now</button> : <p>Out of Stock</p>}
      
      {/* Function calls */}
      <p>Added: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
```

---

## Section 2: Props - Passing Data Between Components (10 minutes)

### 2.1 Understanding Props
**Props** (short for properties) are how you pass data from a parent component to a child component. Think of them like **ingredients given to a chef** - the chef (component) knows how to make a dish, but needs you to provide the specific ingredients (props) to customize it. The same chef can make pasta with tomatoes or pasta with cheese, depending on what ingredients you provide.

**Key Concept**: Props make components reusable. Instead of hardcoding values, you pass them in as props.

```jsx
// This component accepts props as its parameter
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Use it with different data
<Greeting name="Alice" />
<Greeting name="Bob" />
```

### 2.2 Destructuring Props for Cleaner Code
Instead of writing `props.name`, `props.age`, etc., you can destructure:

```jsx
// Instead of this:
function UserCard(props) {
  return <div>{props.name} is {props.age} years old</div>;
}

// Write this:
function UserCard({ name, age }) {
  return <div>{name} is {age} years old</div>;
}
```

### 2.3 Types of Props
Props can be any JavaScript value:

```jsx
function ProfileCard({ 
  name,           // string
  age,            // number
  isActive,       // boolean
  hobbies,        // array
  address,        // object
  onEdit          // function
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>City: {address.city}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}
```

### 2.4 Default Props
You can provide default values for props:

```jsx
function Button({ text = "Click me", color = "blue" }) {
  return <button className={`btn-${color}`}>{text}</button>;
}

// Both of these work:
<Button />                    // Uses defaults
<Button text="Save" color="green" />  // Uses provided values
```

### 2.5 Props Are Read-Only
**Important Rule**: Never modify props inside a component. Props flow down from parent to child and should not be changed by the child.

```jsx
function BadExample({ count }) {
  count = count + 1;  // ❌ Never do this!
  return <div>{count}</div>;
}
```

---

## Section 3: State - Making Components Interactive (15 minutes)

### 3.1 What is State?
**State** is data that belongs to a component and can change over time. When state changes, React automatically re-renders the component to reflect the new data.

Think of state like a **mood ring that changes color** - the ring (component) has its own internal chemistry (state) that determines its color (appearance). When the chemistry changes, the ring automatically shows a new color. You can't control the ring's color from the outside, but the ring can change its own color based on its internal state.

**Key Difference**: Props come from outside (parent), state belongs to the component itself.

```jsx
import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, functionToUpdateValue]
  const [count, setCount] = useState(0);  // 0 is the initial value
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
```

### 3.2 The useState Hook
`useState` is a React **hook** - a special function that lets you add state to components.

**Syntax**: `const [stateVariable, setterFunction] = useState(initialValue)`

- **stateVariable**: The current value
- **setterFunction**: Function to update the value (always starts with "set")
- **initialValue**: What the state starts as

```jsx
// Different types of state
const [name, setName] = useState("");           // string
const [isVisible, setIsVisible] = useState(true);  // boolean
const [items, setItems] = useState([]);         // array
const [user, setUser] = useState({ name: "", age: 0 });  // object
```

### 3.3 Updating State Correctly
**Crucial Rule**: Always use the setter function to update state. Never modify state directly.

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodo) => {
    // ✅ Correct: Create new array
    setTodos([...todos, newTodo]);
    
    // ❌ Wrong: Modifying existing array
    // todos.push(newTodo);
    // setTodos(todos);
  };
}
```

**Why?** React needs to detect changes to know when to re-render. If you modify the existing array/object, React won't notice the change.

### 3.4 State vs Props - The Data Flow
Understanding the difference between state and props is crucial:

- **State**: Data that belongs to a component and can change
- **Props**: Data passed down from a parent component (read-only)

```jsx
function App() {
  const [user, setUser] = useState({ name: "Alice", score: 100 });
  
  return (
    <div>
      {/* user is STATE in App, but becomes PROPS in UserDisplay */}
      <UserDisplay name={user.name} score={user.score} />
      <ScoreButton onScoreChange={setUser} />
    </div>
  );
}

function UserDisplay({ name, score }) {
  // name and score are PROPS here (can't be changed directly)
  return <h2>{name}: {score} points</h2>;
}
```

### 3.5 When State Changes, React Re-renders
This is React's magic: when you call a state setter function, React automatically:
1. Updates the state value
2. Re-runs your component function
3. Updates the DOM to match the new output

You don't have to manually update the DOM - React handles it!

---

## Section 4: Event Handling - Making Things Interactive (8 minutes)

### 4.1 React Events vs DOM Events
React uses **SyntheticEvents** - they work like regular DOM events but are consistent across all browsers.

**Syntax**: Event handlers in React use camelCase and are passed as props.

```jsx
function InteractiveButton() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
```

### 4.2 Common Event Types
- **onClick**: When elements are clicked
- **onChange**: When input values change
- **onSubmit**: When forms are submitted
- **onMouseEnter/onMouseLeave**: Mouse hover events
- **onKeyDown**: When keys are pressed

### 4.3 Handling Form Input
Forms in React use **controlled components** - the input's value comes from state. Think of it like a **two-way radio system**: the input field (radio) displays whatever message is stored in state (headquarters), and when someone types into the input, it immediately sends that message back to headquarters to update the official record.

```jsx
function NameForm() {
  const [name, setName] = useState("");
  
  const handleChange = (event) => {
    setName(event.target.value);  // Get the input's current value
  };
  
  return (
    <input 
      type="text"
      value={name}           // Value comes from state
      onChange={handleChange} // Update state when typing
      placeholder="Enter your name"
    />
  );
}
```

### 4.4 Preventing Default Behavior
For forms, you often need to prevent the page from refreshing:

```jsx
function ContactForm() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();  // Don't refresh the page
    console.log("Submitted:", email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Section 5: Putting It Together - Component Composition (7 minutes)

### 5.1 Building Larger UIs
Real applications combine many components together. Each component should have a single responsibility.

```jsx
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Header user={user} />
      <MainContent user={user} />
      <Footer />
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      {user ? <UserMenu user={user} /> : <LoginButton />}
    </header>
  );
}
```

### 5.2 Conditional Rendering Patterns
Show different content based on state or props:

```jsx
function Dashboard({ user }) {
  // Early return for simple conditions
  if (!user) {
    return <div>Please log in to continue</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      
      {/* Conditional rendering with && */}
      {user.isAdmin && <AdminPanel />}
      
      {/* Conditional rendering with ternary */}
      {user.hasMessages ? <MessageList /> : <p>No new messages</p>}
    </div>
  );
}
```

### 5.3 Lists and Keys
When rendering lists, each item needs a unique `key`:

```jsx
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>  {/* key should be unique and stable */}
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
}
```

**Why keys?** React uses keys to track which items have changed, been added, or removed for efficient updates. Think of keys like **student ID numbers in a classroom** - when students move seats or new students join, the teacher can quickly identify who is who by their ID number rather than trying to remember everyone's face and position.

---

## Section 6: React Best Practices & Common Patterns (5 minutes)

### 6.1 Component Design Principles
1. **Single Responsibility**: Each component should do one thing well
2. **Reusability**: Design components to be used in multiple places
3. **Clear Props**: Make it obvious what data a component needs
4. **Predictable**: Same props should always produce the same output

### 6.2 State Management Guidelines
- **Keep state minimal**: Only store what you need
- **State placement**: Put state in the lowest common parent of components that need it
- **Avoid duplicating state**: Don't store the same data in multiple places

### 6.3 Common Mistakes to Avoid
1. **Mutating state directly**: Always use setter functions
2. **Using array index as key**: Use stable, unique identifiers
3. **Too many state variables**: Sometimes one object is better than many variables
4. **Forgetting dependencies**: Make sure event handlers have access to current state

---

## Live Demo: Simple Counter App (5 minutes)

Let's build a counter that demonstrates all the concepts:

```jsx
function CounterApp() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      
      <div>
        <button onClick={() => setCount(count - step)}>-{step}</button>
        <button onClick={() => setCount(count + step)}>+{step}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      
      <div>
        <label>
          Step size:
          <input 
            type="number" 
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
```

This simple app demonstrates:
- **Components** (CounterApp function)
- **JSX** (HTML-like syntax)
- **State** (count and step)
- **Events** (onClick, onChange)
- **Controlled inputs** (input value from state)

---

## Wrap-Up & Next Steps (5 minutes)

### What We've Learned
- **React's mental model**: Describe what you want, not how to get there
- **Components**: Reusable functions that return JSX
- **JSX syntax**: HTML-like code in JavaScript with special rules
- **Props**: Data passed from parent to child components
- **State**: Component-owned data that can change over time
- **Events**: Making components interactive with user input

### The React Way of Thinking
1. Break your UI into components
2. Identify what data each component needs (props vs state)
3. Write components that describe the UI for any given data
4. Let React handle updating the DOM when data changes

### Coming Up Next
- More advanced React patterns
- Working with APIs in React
- Managing complex state
- Building larger applications

---

## Key Concepts Summary

| Concept | What It Is | Key Points |
|---------|------------|------------|
| **Component** | A JavaScript function that returns JSX | Reusable, composable, single responsibility |
| **JSX** | HTML-like syntax in JavaScript | Use {} for JavaScript, different attribute names |
| **Props** | Data passed to components | Read-only, make components reusable |
| **State** | Component's own changeable data | Use useState, always use setter function |
| **Events** | User interactions | camelCase names, can update state |

**Remember**: React is about building UIs with components that automatically update when data changes. Master these fundamentals, and you'll think in React! 🚀
