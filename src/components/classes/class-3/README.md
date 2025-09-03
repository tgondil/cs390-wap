# Class 3 – Introduction to APIs

## Class Overview (50 minutes)
Class 3 builds on the JavaScript fundamentals from Class 2 and introduces students to APIs (Application Programming Interfaces). Students will learn how to fetch data from external sources, handle asynchronous operations, and integrate real-world data into their web applications.

- **Prerequisites**: Class 2 JavaScript concepts (variables, functions, arrays, DOM manipulation)
- **Scope**: Vanilla JavaScript with fetch API, JSON handling, and async/await
- **Outcome**: Students can fetch data from APIs, handle responses, and display dynamic content

---

## Section 0: Quick Review (5 minutes)

### 0.1 What We Know from Class 2
- Variables (`const`, `let`) and data types (string, number, boolean, array, object)
- Functions and array methods (`.map()`, `.filter()`, `.find()`)
- DOM manipulation (`querySelector`, `textContent`, `innerHTML`)
- Event handling (`addEventListener`)

### 0.2 Today's New Challenge
- Instead of static data arrays, we'll fetch live data from the internet
- Handle loading states and errors gracefully
- Work with real-world data formats (JSON)

---

## Section 1: What Are APIs? (10 minutes)

### 1.1 API Fundamentals
- **API**: Application Programming Interface - a way for programs to talk to each other
- **Web API**: A service that provides data over HTTP (the internet)
- **Endpoint**: A specific URL where you can request data

### 1.2 Real-World Examples
```js
// Weather API
'https://api.weather.com/current?city=chicago'
// Returns: { temperature: 72, condition: 'sunny' }

// GitHub API  
'https://api.github.com/users/tanay'
// Returns: { name: 'Tanay Gondil', followers: 42, ... }

// Random Cat Facts API
'https://catfact.ninja/fact'
// Returns: { fact: 'Cats sleep 12-16 hours per day', length: 32 }
```

### 1.3 Why APIs Matter
- **Live Data**: Weather, news, social media posts
- **User Data**: Login, profiles, saved preferences  
- **Business Logic**: Payment processing, email sending
- **Third-party Services**: Maps, translations, image processing

---

## Section 2: HTTP and JSON Basics (8 minutes)

### 2.1 HTTP Methods (The Verbs)
```js
// GET - Retrieve data (most common)
fetch('https://api.github.com/users/tanay')

// POST - Send new data
fetch('/api/users', { 
  method: 'POST', 
  body: JSON.stringify({ name: 'Alice' }) 
})

// PUT - Update existing data
// DELETE - Remove data
```

### 2.2 JSON: The Universal Data Format
```js
// JSON looks like JavaScript objects, but it's a string
const jsonString = '{"name": "Alice", "age": 25, "skills": ["JS", "React"]}';

// Convert JSON string to JavaScript object
const data = JSON.parse(jsonString);
console.log(data.name); // "Alice"

// Convert JavaScript object to JSON string
const user = { name: 'Bob', age: 30 };
const json = JSON.stringify(user);
// Result: '{"name":"Bob","age":30}'
```

---

## Section 3: Fetch API and Promises (12 minutes)

### 3.1 The Fetch Function
```js
// Basic fetch - returns a Promise
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())  // Convert to JavaScript object
  .then(data => console.log(data))    // Use the data
  .catch(error => console.error(error)); // Handle errors
```

### 3.2 Modern Async/Await Syntax
```js
// Cleaner syntax for the same operation
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user.name); // "Leanne Graham"
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}
```

### 3.3 Handling Different Response Types
```js
async function fetchData(url) {
  const response = await fetch(url);
  
  // Always check if the request was successful
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  // Different ways to read the response
  const data = await response.json();    // For JSON APIs
  const text = await response.text();    // For plain text
  const blob = await response.blob();    // For files/images
  
  return data;
}
```

---

## Section 4: Practical API Integration (10 minutes)

### 4.1 Loading States and User Experience
```js
// Show loading spinner while fetching
async function loadUserProfile(userId) {
  const loadingEl = document.querySelector('#loading');
  const profileEl = document.querySelector('#profile');
  
  // Show loading state
  loadingEl.style.display = 'block';
  profileEl.style.display = 'none';
  
  try {
    const user = await fetchUser(userId);
    displayUser(user);
  } catch (error) {
    showError('Failed to load profile');
  } finally {
    // Hide loading state
    loadingEl.style.display = 'none';
  }
}
```

### 4.2 Dynamic Content Rendering
```js
// Transform API data into HTML (using Class 2 skills!)
function displayUsers(users) {
  const container = document.querySelector('#users-list');
  
  const html = users.map(user => `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Company: ${user.company.name}</p>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

// Fetch and display
async function loadAllUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json());
  displayUsers(users);
}
```

### 4.3 Search and Filter with APIs
```js
// Combine user input with API calls
document.querySelector('#search').addEventListener('input', async (e) => {
  const query = e.target.value.trim();
  
  if (query.length < 2) return; // Don't search short queries
  
  try {
    const results = await fetch(`https://api.github.com/search/users?q=${query}`)
      .then(r => r.json());
    
    displaySearchResults(results.items);
  } catch (error) {
    console.error('Search failed:', error);
  }
});
```

---

## Section 5: Live Demo - Weather Dashboard (10 minutes)

### 5.1 Build a Weather App
```html
<!-- HTML Structure -->
<div id="weather-app">
  <input id="city-input" placeholder="Enter city name" />
  <button id="get-weather">Get Weather</button>
  <div id="loading" style="display: none;">Loading...</div>
  <div id="weather-display"></div>
  <div id="error" style="display: none;"></div>
</div>
```

```js
// JavaScript Implementation
async function getWeather(city) {
  const apiKey = 'demo'; // In real apps, keep this secure!
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  showLoading(true);
  hideError();
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    const weather = await response.json();
    displayWeather(weather);
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}

function displayWeather(weather) {
  const display = document.querySelector('#weather-display');
  display.innerHTML = `
    <h2>${weather.name}</h2>
    <div class="temperature">${Math.round(weather.main.temp)}°C</div>
    <div class="condition">${weather.weather[0].description}</div>
    <div class="details">
      Feels like ${Math.round(weather.main.feels_like)}°C
    </div>
  `;
}

// Event listeners
document.querySelector('#get-weather').addEventListener('click', () => {
  const city = document.querySelector('#city-input').value;
  if (city) getWeather(city);
});
```

---

## Section 6: Error Handling and Best Practices (5 minutes)

### 6.1 Graceful Error Handling
```js
async function safeApiCall(url) {
  try {
    const response = await fetch(url);
    
    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data };
    
  } catch (error) {
    console.error('API call failed:', error);
    return { success: false, error: error.message };
  }
}

// Usage
const result = await safeApiCall('https://api.example.com/data');
if (result.success) {
  displayData(result.data);
} else {
  showErrorMessage(result.error);
}
```

### 6.2 API Best Practices
- **Always handle errors** - networks fail, servers go down
- **Show loading states** - let users know something is happening
- **Validate data** - APIs can return unexpected formats
- **Rate limiting** - don't spam APIs with requests
- **Secure API keys** - never expose them in frontend code

---

## Micro-Challenges (sprinkled throughout, 1-2 min each)
- Fetch a random joke and display it
- Create a "Load More" button that fetches additional posts
- Build a simple search that queries an API as you type
- Display user avatars from GitHub API

---

## Live Demo Apps

### Demo 1: Random Quote Generator
- Fetch quotes from an API
- Display with author attribution
- "New Quote" button for fresh content

### Demo 2: GitHub User Lookup
- Search GitHub users by username
- Display profile info and repositories
- Handle "user not found" errors gracefully

### Demo 3: Simple Todo API
- Fetch todos from JSONPlaceholder API
- Display in a clean list format
- Show completed vs pending status

---

## Common APIs for Practice
- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/` (fake data for testing)
- **Cat Facts**: `https://catfact.ninja/fact` (random cat facts)
- **Random User**: `https://randomuser.me/api/` (fake user profiles)
- **GitHub**: `https://api.github.com/users/{username}` (public user data)
- **REST Countries**: `https://restcountries.com/v3.1/all` (country information)

---

## Wrap-Up (5 minutes)
- APIs are everywhere in modern web development
- JavaScript's fetch makes it easy to get external data
- Always handle loading states and errors
- Preview next class: React components and state management

---

## Interactive Design Elements (for slides)
- API request/response visualizations
- Live data fetching demos
- Loading state animations
- Error handling examples
- Real-time API call demonstrations

## Accessibility
- Loading indicators for screen readers
- Error messages that are announced
- Keyboard navigation for all interactive elements
- Clear labels for all form inputs

---

## Estimated Timing Breakdown

| Section | Duration | Content Type |
|---------|----------|--------------|
| Quick Review | 5 min | Recap + motivation |
| API Fundamentals | 10 min | Concepts + examples |
| HTTP & JSON | 8 min | Technical foundation |
| Fetch & Promises | 12 min | Core implementation |
| Practical Integration | 10 min | Real-world patterns |
| Error Handling | 5 min | Best practices |
| **Total** | **50 min** | **Hands-on, demo-driven** |

---

## Learning Outcomes
By the end of this class, students will be able to:
1. Explain what APIs are and why they're essential for modern web development
2. Make HTTP requests using the fetch API with proper error handling
3. Parse JSON responses and extract relevant data
4. Handle asynchronous operations using async/await
5. Display dynamic content fetched from external APIs
6. Implement loading states and error handling for better user experience
7. Apply JavaScript fundamentals (from Class 2) to work with real-world data sources

---

## Prerequisites from Class 2
Students should be comfortable with:
- Variables and data types
- Functions (regular and arrow functions)
- Arrays and array methods (`.map()`, `.filter()`, `.find()`)
- Objects and destructuring
- DOM selection and manipulation
- Event handling
- Template literals for dynamic HTML generation

---

## Assignment Ideas
- **Weather Dashboard**: Fetch weather data for multiple cities
- **GitHub Profile Viewer**: Search and display GitHub user information
- **Random Content Generator**: Use multiple APIs to create dynamic content
- **News Reader**: Fetch and display news articles with filtering
- **Movie Database**: Search movies and display details with posters 