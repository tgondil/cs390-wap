# Class 8 – useEffect & Side Effects in React

## Class Overview (50 minutes)
Class 8 introduces students to one of React's most powerful hooks: `useEffect`. Students will learn how to handle side effects, manage data fetching, implement cleanup functions, and understand the React component lifecycle. This class builds on previous React knowledge and prepares students for real-world React development patterns.

- **Prerequisites**: React fundamentals (components, JSX, state, props, useState)
- **Scope**: useEffect hook, dependency arrays, data fetching, cleanup functions, effect lifecycle
- **Outcome**: Students can manage side effects, fetch data, and handle component lifecycle events in React

---

## Section 0: Quick Review - State vs Effects (5 minutes)

### 0.1 What We Know: State Management
```jsx
// State: Data that belongs to the component
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### 0.2 The Problem: Side Effects
```jsx
// ❌ This doesn't work - infinite re-renders!
function BadExample() {
  const [users, setUsers] = useState([]);
  
  // This runs on every render!
  fetch('/api/users')
    .then(r => r.json())
    .then(setUsers);
    
  return <div>{users.length} users</div>;
}
```

### 0.3 What Are Side Effects?
- **Side Effect**: Any operation that affects something outside the component
- Examples: API calls, timers, DOM manipulation, subscriptions
- **Problem**: React components should be "pure" - same input, same output
- **Solution**: useEffect hook manages side effects safely

---

## Section 1: Introduction to useEffect (10 minutes)

### 1.1 Basic useEffect Syntax
```jsx
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  
  // Effect runs after component renders
  useEffect(() => {
    console.log('Component rendered!');
    // Side effect code goes here
  });
  
  return <div>My Component</div>;
}
```

### 1.2 Effect Timing
```jsx
function EffectTiming() {
  const [count, setCount] = useState(0);
  
  console.log('1. Component rendering');
  
  useEffect(() => {
    console.log('3. Effect running after render');
  });
  
  console.log('2. About to return JSX');
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### 1.3 Why useEffect?
- **Separation of Concerns**: Keep side effects separate from render logic
- **Predictable Timing**: Effects run after DOM updates
- **Cleanup Support**: Built-in cleanup mechanism
- **Performance**: Control when effects run with dependencies

---

## Section 2: Dependency Arrays - Controlling When Effects Run (12 minutes)

### 2.1 No Dependencies - Runs Every Render
```jsx
function EveryRender() {
  const [count, setCount] = useState(0);
  
  // Runs after every render - usually not what you want!
  useEffect(() => {
    console.log('Effect runs every time');
    document.title = `Count: ${count}`;
  });
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 2.2 Empty Dependencies - Runs Once
```jsx
function OnceOnMount() {
  const [users, setUsers] = useState([]);
  
  // Runs only once after first render (like componentDidMount)
  useEffect(() => {
    console.log('This runs only once!');
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers);
  }, []); // Empty dependency array
  
  return <div>{users.length} users loaded</div>;
}
```

### 2.3 Specific Dependencies - Runs When Dependencies Change
```jsx
function WatchSpecificValues() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  
  // Only runs when userId changes, not when theme changes
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]); // Effect depends on userId
  
  return (
    <div>
      <select onChange={(e) => setUserId(e.target.value)}>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
      </select>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      {user && <p>User: {user.name}</p>}
    </div>
  );
}
```

### 2.4 Multiple Dependencies
```jsx
function MultipleDependencies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState([]);
  
  // Runs when either searchTerm OR category changes
  useEffect(() => {
    if (searchTerm.length > 2) {
      fetch(`/api/search?q=${searchTerm}&category=${category}`)
        .then(r => r.json())
        .then(setResults);
    }
  }, [searchTerm, category]); // Multiple dependencies
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="posts">Posts</option>
        <option value="users">Users</option>
      </select>
      <div>{results.length} results</div>
    </div>
  );
}
```

---

## Section 3: Data Fetching with useEffect (10 minutes)

### 3.1 Basic Data Fetching Pattern
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Reset state when starting new fetch
    setLoading(true);
    setError(null);
    
    fetch(`/api/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then(userData => {
        setUser(userData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]); // Re-fetch when userId changes
  
  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
    </div>
  );
}
```

### 3.2 Async/Await in useEffect
```jsx
function AsyncDataFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Can't make useEffect callback async directly
    // Create async function inside
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch('/api/posts');
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []); // Run once on mount
  
  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### 3.3 Custom Hook for Data Fetching
```jsx
// Custom hook - reusable data fetching logic
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fetch failed');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    if (url) fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Using the custom hook
function PostsList() {
  const { data: posts, loading, error } = useApi('/api/posts');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {posts?.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
```

---

## Section 4: Cleanup Functions - Managing Resources (8 minutes)

### 4.1 Why Cleanup Matters
```jsx
// ❌ Memory leak - timer keeps running even after component unmounts
function BadTimer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }, []); // No cleanup!
  
  return <div>Seconds: {seconds}</div>;
}
```

### 4.2 Cleanup with Return Function
```jsx
function GoodTimer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup function - runs when effect is cleaned up
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleaned up!');
    };
  }, []); // Run once, cleanup on unmount
  
  return <div>Seconds: {seconds}</div>;
}
```

### 4.3 Event Listener Cleanup
```jsx
function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup - remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // No dependencies - set up once
  
  return (
    <div>
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}
```

### 4.4 Fetch Request Cleanup (AbortController)
```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!query) return;
    
    // Create AbortController for this request
    const abortController = new AbortController();
    
    async function search() {
      try {
        setLoading(true);
        const response = await fetch(`/api/search?q=${query}`, {
          signal: abortController.signal // Pass abort signal
        });
        const data = await response.json();
        setResults(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Search failed:', error);
        }
      } finally {
        setLoading(false);
      }
    }
    
    search();
    
    // Cleanup - abort the request if component unmounts or query changes
    return () => {
      abortController.abort();
    };
  }, [query]); // Re-run when query changes
  
  return (
    <div>
      {loading && <p>Searching...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Section 5: Live Demo - Real-Time Dashboard (10 minutes)

### 5.1 Complete Dashboard Component
```jsx
function LiveDashboard() {
  const [stats, setStats] = useState({ users: 0, posts: 0, views: 0 });
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // Fetch initial data
  useEffect(() => {
    async function fetchInitialStats() {
      try {
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setStats(data);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to fetch initial stats:', error);
      }
    }
    
    fetchInitialStats();
  }, []); // Run once on mount
  
  // Set up real-time updates
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setStats(data);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to update stats:', error);
      }
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Track online/offline status
  useEffect(() => {
    function handleOnline() { setIsOnline(true); }
    function handleOffline() { setIsOnline(false); }
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  // Update document title
  useEffect(() => {
    document.title = `Dashboard - ${stats.users} users online`;
    
    return () => {
      document.title = 'My App'; // Reset title on cleanup
    };
  }, [stats.users]);
  
  return (
    <div className="dashboard">
      <h1>Live Dashboard</h1>
      
      <div className="status-bar">
        <span className={`status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? '🟢 Online' : '🔴 Offline'}
        </span>
        <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Users</h3>
          <div className="stat-value">{stats.users.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <h3>Total Posts</h3>
          <div className="stat-value">{stats.posts.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <h3>Page Views</h3>
          <div className="stat-value">{stats.views.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
```

---

## Section 6: Common Patterns and Best Practices (5 minutes)

### 6.1 Effect Dependencies Best Practices
```jsx
function EffectBestPractices() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  
  // ✅ Good - include all values from component scope used inside effect
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    }
    
    fetchUser();
  }, [userId]); // userId is used inside effect, so include it
  
  // ❌ Bad - missing dependency
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, []); // Missing userId dependency!
  
  // ✅ Good - no dependencies needed when using functional updates
  useEffect(() => {
    const timer = setInterval(() => {
      setUser(prevUser => ({
        ...prevUser,
        lastSeen: new Date()
      }));
    }, 60000);
    
    return () => clearInterval(timer);
  }, []); // No dependencies needed - using functional update
}
```

### 6.2 Conditional Effects
```jsx
function ConditionalEffects({ shouldFetch, userId }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Only run effect if condition is met
    if (!shouldFetch || !userId) return;
    
    fetch(`/api/data/${userId}`)
      .then(r => r.json())
      .then(setData);
  }, [shouldFetch, userId]); // Include all dependencies
  
  return data ? <div>{data.name}</div> : null;
}
```

### 6.3 Multiple Effects for Separation of Concerns
```jsx
function MultipleEffects({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  // Effect 1: Fetch user data
  useEffect(() => {
    if (!userId) return;
    
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
  
  // Effect 2: Fetch user's posts (separate concern)
  useEffect(() => {
    if (!userId) return;
    
    fetch(`/api/users/${userId}/posts`)
      .then(r => r.json())
      .then(setPosts);
  }, [userId]);
  
  // Effect 3: Update document title
  useEffect(() => {
    if (user) {
      document.title = `${user.name}'s Profile`;
    }
    
    return () => {
      document.title = 'My App';
    };
  }, [user]);
  
  return (
    <div>
      {user && <h1>{user.name}</h1>}
      <div>{posts.length} posts</div>
    </div>
  );
}
```

---

## Micro-Challenges (sprinkled throughout, 1-2 min each)
- Create a component that fetches and displays a random quote on mount
- Build a live clock that updates every second (with proper cleanup)
- Implement a search component that debounces API calls
- Create a component that tracks mouse position
- Build a component that changes document title based on state

---

## Live Demo Apps

### Demo 1: Weather Widget
- Fetch weather data on mount
- Update every 10 minutes automatically
- Handle loading and error states
- Cleanup interval on unmount

### Demo 2: Chat Message Tracker
- Fetch initial messages
- Set up real-time updates with WebSocket
- Cleanup WebSocket connection properly
- Update page title with unread count

### Demo 3: User Activity Monitor
- Track window focus/blur events
- Log user activity timestamps
- Clean up event listeners properly
- Handle page visibility changes

---

## Wrap-Up (5 minutes)
- useEffect manages side effects safely in React
- Dependency arrays control when effects run
- Always clean up resources (timers, listeners, subscriptions)
- Separate different concerns into different effects
- Preview next class: Advanced React patterns and context

---

## Interactive Design Elements (for slides)
- Effect lifecycle visualizations
- Dependency array comparisons
- Loading state animations
- Real-time data updates
- Cleanup function demonstrations

## Accessibility
- Loading states announced to screen readers
- Error messages properly labeled
- Focus management during state changes
- Keyboard navigation maintained during updates

---

## Estimated Timing Breakdown

| Section | Duration | Content Type |
|---------|----------|--------------|
| State vs Effects Review | 5 min | Concept + problem identification |
| useEffect Introduction | 10 min | Syntax + basic patterns |
| Dependency Arrays | 12 min | Control flow + examples |
| Data Fetching | 10 min | Real-world implementation |
| Cleanup Functions | 8 min | Resource management |
| Live Demo | 10 min | Complete application |
| Best Practices | 5 min | Patterns + common mistakes |
| **Total** | **50 min** | **Hands-on, demo-driven** |

---

## Learning Outcomes
By the end of this class, students will be able to:
1. Explain what side effects are and why useEffect is necessary in React
2. Use useEffect with different dependency array patterns (none, empty, specific)
3. Fetch data from APIs safely using useEffect with proper error handling
4. Implement cleanup functions to prevent memory leaks and resource issues
5. Handle component lifecycle events (mount, update, unmount)
6. Create real-time features with intervals and event listeners
7. Apply best practices for effect dependencies and separation of concerns
8. Debug common useEffect issues and infinite render loops

---

## Prerequisites from Previous Classes
Students should be comfortable with:
- React components and JSX
- useState hook and state management
- Event handling in React
- JavaScript promises and async/await
- Array methods and object manipulation
- Basic HTTP requests and JSON handling

---

## Assignment Ideas
- **Personal Dashboard**: Create a dashboard that fetches multiple data sources
- **Real-time Chat Interface**: Build a chat that updates in real-time
- **Weather App**: Fetch weather data with auto-refresh and location tracking
- **Todo App with API**: Connect todo app to a backend with proper loading states
- **Activity Tracker**: Track user interactions and browser events with proper cleanup 